/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import { companyName } from "../../constants";

export default function Logo() {
  return (
    <div class="logo row">
      <img src="images/logo.png" alt="logo" width={45} />

      <div class="typo">{companyName}</div>
    </div>
  );
}
