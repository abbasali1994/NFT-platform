import * as React from "react";
import { useSelector } from "react-redux";
import { userAddress } from "../../redux/walletSlice";
import { formatAddress } from "../../utils/wallet";
import { connectToWallet } from "../../utils/wallet";

export default function ConnectWallet() {
  const address = useSelector(userAddress);
  return (
    <div id="connect-btn">
      <button className="wallet" onClick={() => connectToWallet()}>
        <span className="dot"></span>
        {formatAddress(address)}
      </button>
    </div>
  );
}
