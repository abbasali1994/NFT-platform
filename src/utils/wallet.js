import { ethers } from "ethers";

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletLink } from "walletlink";
import Fortmatic from "fortmatic";

import store from "../store";
import { setAddress, setEnsName } from "../redux/walletSlice";
import { CHAIN_ID, INFURA_ID } from "../constants";

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
