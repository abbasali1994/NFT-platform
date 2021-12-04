/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import ConnectWallet from "../ConnectWallet";
import { DiscordLink, TwitterLink } from "../Links";
import { Link } from "@mui/material";

import Logo from "../Logo";
import "./styles.css";

export default function Navbar() {
  return (
    <div>
      <header className="container row sr-top-slow header" data-sr-id="0">
        <Logo/>
          <h5><Link color="inherit" underline="none" href="/">Home</Link></h5>
          <h5><Link color="inherit" underline="none" href="/mykamis">My Kamis</Link></h5>
          <h5><Link color="inherit" underline="none" href="/markets">Markets</Link></h5>
        <div className="socialnav row">
          <TwitterLink />
          <DiscordLink />
          <ConnectWallet />
        </div>
      </header>
      </div>
  );
}
