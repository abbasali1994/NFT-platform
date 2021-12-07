/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import ConnectWallet from "../ConnectWallet";
import { DiscordLink, TwitterLink } from "../Links";

import Logo from "../Logo";
import "./styles.css";
import { navigate } from "hookrouter";

export default function Navbar() {
  return (
    <header className="container row sr-top-slow header" data-sr-id="0">
      <Logo />

      <button className="wallet" onClick={() => navigate("/")}>
        Home
      </button>
      <button className="wallet" onClick={() => navigate("/mykamis")}>
        My Kamis
      </button>
      <button className="wallet" onClick={() => navigate("/markets")}>
        Markets
      </button>

      <div className="socialnav row">
        <TwitterLink />
        <DiscordLink />
        <ConnectWallet />
      </div>
    </header>
  );
}
