import { ethers } from "ethers";
import { contractAddress } from "../constants";
import { setMyNFTS, setTokenId, setTokens } from "../redux/walletSlice";
import store from "../store";
import { getEthersProvider } from "./wallet";
import ABI from "../ABI.json";

export const mintNFT = async (count) => {
  const provider = getEthersProvider();
  if (provider !== null) {
    try {
      const signer = provider.getSigner();
      const gasPrice = await provider.getGasPrice();
      const { wallet } = store.getState();
      const mintContract = new ethers.Contract(
        contractAddress[wallet.networkID],
        ABI,
        signer
      );
      const whiteListMintEnabled = await mintContract.whitelistMintEnabled();

      let txn = null;
      if (whiteListMintEnabled) {
        const _tokenIdTracker = await mintContract.totalSupply();

        const overrides = {
          value: ethers.utils.parseEther(
            parseFloat(wallet.tokens.MINT_FEE).toString()
          ),
          gasLimit: 600000,
          gasPrice,
        };
        txn = await mintContract.whitelistMint(
          wallet.address,
          parseInt(_tokenIdTracker) + 1,
          overrides
        );
      } else {
        const overrides = {
          value: ethers.utils.parseEther(
            (parseFloat(wallet.tokens.MINT_FEE) * count).toString()
          ),
          gasLimit: 600000,
          gasPrice,
        };
        txn = await mintContract.mint(count, overrides);
      }
      await txn.wait();
      fetchMyNFTs(wallet.address);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
};

export const fetchNFTData = async () => {
  const provider = getEthersProvider();
  if (provider !== null) {
    try {
      const signer = provider.getSigner();
      const { wallet } = store.getState();
      const mintContract = new ethers.Contract(
        contractAddress[wallet.networkID],
        ABI,
        signer
      );
      const maxTokens = (await mintContract.maxTokens()).toString();
      const MAX_MINT_COUNT = parseFloat(
        (await mintContract.MAX_MINT_COUNT()).toString()
      );
      const MINT_FEE = ethers.utils.formatEther(
        (await mintContract.MINT_FEE()).toString()
      );
      const _tokenIdTracker = await mintContract.totalSupply();
      store.dispatch(
        setTokens({
          maxTokens,
          MAX_MINT_COUNT,
          MINT_FEE,
          _tokenIdTracker: parseInt(_tokenIdTracker),
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
};

export const fetchNFTTokenID = async () => {
  const provider = getEthersProvider();
  try {
    const signer = provider.getSigner();
    const { wallet } = store.getState();
    const mintContract = new ethers.Contract(
      contractAddress[wallet.networkID],
      ABI,
      signer
    );
    const _tokenIdTracker = (await mintContract.totalSupply()).toString();

    store.dispatch(setTokenId(_tokenIdTracker));
  } catch (error) {
    console.log(error);
  }
};

export const BigNumberToNumber = (value, decimals) => {
  return ethers.utils.formatUnits(value, 0);
};

export const fetchMyNFTs = async (userAddress) => {
  const provider = getEthersProvider();
  try {
    const { wallet } = store.getState();
    console.log(userAddress, contractAddress[wallet.networkID]);
    const signer = provider.getSigner();
    const mintContract = new ethers.Contract(
      contractAddress[wallet.networkID],
      ABI,
      signer
    );
    const tempCounts = await mintContract.balanceOf(userAddress);
    const count = BigNumberToNumber(tempCounts, 0);
    const nftIDs = [];
    for (let i = 0; i < parseInt(count); i++) {
      const tempTokenId = await mintContract.tokenOfOwnerByIndex(
        userAddress,
        i
      );
      const nftData = await fetchNFT(tempTokenId.toString());
      nftIDs[i] = nftData;
    }
    store.dispatch(setMyNFTS(nftIDs));
  } catch (error) {
    console.log(error);
  }
};

const fetchNFT = async (nftID) => {
  var tempID = parseInt(nftID) + 1;
  const src = "metadata/metadata" + tempID + ".json";
  const fetch_value = await fetch(src, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const nftVal = await fetch_value.json();
  return nftVal;
};
