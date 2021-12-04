/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from "react";
import { companyName, contractAddress } from "../../constants";
import { DiscordLink, TwitterLink } from "../Links";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer>
      <div className="container row">
        <div className="infos column sr-top-fast">
          <div className="blockmark column">
            <Logo />
            <p className="baseline">Join The Citadel of Tomorrow</p>
          </div>
          <p className="copyright">©2021 {companyName}. All rights reserved.</p>
        </div>
        <div className="right column sr-top-fast-delayed" data-sr-id="11">
          <div className="nav column">
            <a
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active"
            >
              Home
            </a>
          
            <a href={`https://etherscan.io/address/${contractAddress}`}>
              Smart Contract
            </a>
          </div>
          <div className="social row">
            <TwitterLink />

            <DiscordLink />
          </div>
        </div>
      </div>
    </footer>
  );
}
