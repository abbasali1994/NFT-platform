import { ethers } from "ethers";

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletLink } from "walletlink";
import Fortmatic from "fortmatic";

import store from "../store";
import {
  setAddress,
  setEnsName,
  setTokenId,
  setTokens,
} from "../redux/walletSlice";
import { contractAddress, CHAIN_ID, INFURA_ID } from "../constants";
import ABI from "../ABI.json";

let provider = null;

const providerOptions = {
  /* See Provider Options Section */
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: `${INFURA_ID}`, // required
    },
  },
  fortmatic: {
    package: Fortmatic, // required
    options: {
      key: "pk_live_60CF5C9D0402C9E9", // required
    },
  },
  "custom-coinbase": {
    display: {
      logo: "assets/Coinbase.svg",
      name: "Coinbase",
      description: "Scan with WalletLink to connect",
    },
    options: {
      appName: "app", // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: CHAIN_ID,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};

export const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

export const connectToWallet = async () => {
  try {
    const web3Connection = await web3Modal.connect();
    provider = new ethers.providers.Web3Provider(web3Connection);
    const signer = provider.getSigner();

    const userAddress = await signer.getAddress();
    store.dispatch(setAddress(userAddress));
    try {
      const ensName = await provider.lookupAddress(userAddress);

      if (ensName !== null) {
        store.dispatch(setEnsName(ensName));
      }
    } catch (e) {
      console.log(e);
    }
    fetchNFTData();
    setWalletListener(web3Connection);
    setNetworkListener(web3Connection);
  } catch (e) {
    console.log(e);
    web3Modal.clearCachedProvider();
  }
};

export const getEthersProvider = () => provider;

const setWalletListener = (provider) => {
  provider.on("accountsChanged", async (accounts) => {
    store.dispatch(setAddress(accounts[0]));
    if (!accounts[0]) web3Modal.clearCachedProvider();
  });
};

const setNetworkListener = (provider) => {
  provider.on("chainChanged", async (networkId) => {
    console.log(networkId.toString());
  });
};

export const formatAddress = (ethAddress) => {
  if (ethAddress)
    return (
      ethAddress.substring(0, 4).toUpperCase() +
      "...." +
      ethAddress.substring(38, 42).toUpperCase()
    );
  else return "CONNECT WALLET";
};

export const mintNFT = async (count) => {
  if (provider !== null) {
    try {
      const signer = provider.getSigner();
      const gasPrice = await provider.getGasPrice();
      const mintContract = new ethers.Contract(contractAddress, ABI, signer);
      const txn = await mintContract.mint(count, {
        value: ethers.utils.parseEther((0.1 * count).toString()),
        gasLimit: 600000,
        gasPrice,
      });
      await txn.wait();
      return true;
    } catch (error) {
      console.log(error);
    }
  }
};

export const fetchNFTData = async () => {
  if (provider !== null) {
    try {
      const signer = provider.getSigner();
      const mintContract = new ethers.Contract(contractAddress, ABI, signer);
      const maxTokens = (await mintContract.maxTokens()).toString();
      const MAX_MINT_COUNT = parseFloat(
        (await mintContract.MAX_MINT_COUNT()).toString()
      );
      const MINT_FEE = ethers.utils.formatEther(
        (await mintContract.MINT_FEE()).toString()
      );
      const _tokenIdTracker = (await mintContract._tokenIdTracker()).toString();
      store.dispatch(
        setTokens({ maxTokens, MAX_MINT_COUNT, MINT_FEE, _tokenIdTracker })
      );
    } catch (error) {
      console.log(error);
    }
  }
};

export const fetchNFTTokenID = async () => {
  try {
    console.log("fetchNFTTokenID");
    const signer = provider.getSigner();
    const mintContract = new ethers.Contract(contractAddress, ABI, signer);
    const _tokenIdTracker = (await mintContract._tokenIdTracker()).toString();
    store.dispatch(setTokenId(_tokenIdTracker));
  } catch (error) {
    console.log(error);
  }
};
