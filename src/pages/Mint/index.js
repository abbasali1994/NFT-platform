/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ConnectWallet from "../../components/ConnectWallet";
import Counter from "../../components/Counter";
import { MintBtn } from "../../components/MintBtn";
import { contractAddress } from "../../constants";
import { networkID, tokens, userAddress } from "../../redux/walletSlice";
import { fetchNFTTokenID, mintNFT } from "../../utils/wallet";
import nftImage from "./nft.gif";

export default function Mint() {
  const tokenDetails = useSelector(tokens);
  const address = useSelector(userAddress);
  const networkId = useSelector(networkID);
  const [counter, setCounter] = useState(0);

  const handleMint = async () => {
    if (counter) {
      await mintNFT(counter);
      fetchNFTTokenID();
    }
  };
  return (
    <>
      <div className="container column center">
        <img
          src={nftImage}
          alt="nft"
          style={{
            margin: "10px",
            height: "60vh",
            width: "60vh",
          }}
        />
      </div>
      <div className="column center">
        {!address ? (
          <ConnectWallet />
        ) : contractAddress[networkId] ? (
          <>
            <Counter
              counter={counter}
              setCounter={setCounter}
              maxCount={tokenDetails.MAX_MINT_COUNT}
            />
            <MintBtn mint={handleMint} counter={counter} />

            <div>
              {tokenDetails._tokenIdTracker} out of {tokenDetails.maxTokens}
            </div>
            <div>Price: {tokenDetails.MINT_FEE} AVAX</div>
          </>
        ) : (
          "Connect to Avax Network"
        )}
      </div>
    </>
  );
}
