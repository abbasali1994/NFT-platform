/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from "react";
import { companyName, contractAddress } from "../../constants";
import { DiscordLink, TwitterLink } from "../Links";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer>
      <div class="container row">
        <div class="infos column sr-top-fast">
          <div class="blockmark column">
            <Logo />
            <p class="baseline">Join The Citadel of Tomorrow</p>
          </div>
          <p class="copyright">©2021 {companyName}. All rights reserved.</p>
        </div>
        <div class="right column sr-top-fast-delayed" data-sr-id="11">
          <div class="nav column">
            <a
              aria-current="page"
              href="/"
              class="router-link-active router-link-exact-active"
            >
              Home
            </a>
          
            <a href={`https://etherscan.io/address/${contractAddress}`}>
              Smart Contract
            </a>
          </div>
          <div class="social row">
            <TwitterLink />

            <DiscordLink />
          </div>
        </div>
      </div>
    </footer>
  );
}
