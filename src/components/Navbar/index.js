/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import ConnectWallet from "../ConnectWallet";
import { DiscordLink, TwitterLink } from "../Links";
import Logo from "../Logo";
import "./styles.css";

export default function Navbar() {
  return (
    <section id="hero">
      <header class="container row sr-top-slow header" data-sr-id="0">
        <Logo />
        <div class="socialnav row">
          <TwitterLink />
          <DiscordLink />
          <ConnectWallet />
        </div>
      </header>
      <a class="hero-main-btn clickable" href="/mint">
        <div class="element">
          <div class="text">Mint</div>
        </div>
      </a>
      <img src="images/header.png" width={"100%"} alt="header" />
    </section>
  );
}
