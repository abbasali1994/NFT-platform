/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import Counter from "../../components/Counter";
import MintBtn from "../../components/MintBtn";
import nftImage from "./nft.png";

export default function Mint() {
  const [counter, setCounter] = useState(0);
  const [sold] = useState(0);
  const [price] = useState(0.1);
  const handleMint = () => {
    if (counter) alert("mint function trigger with count:" + counter);
  };
  return (
    <>
      <div class="container column center">
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
      <div class="column center">
        <Counter counter={counter} setCounter={setCounter} />
        <MintBtn mint={handleMint} counter={counter} />

        <div>{sold} out of 10,000</div>
        <div>price: {price}ETH</div>
      </div>
    </>
  );
}
