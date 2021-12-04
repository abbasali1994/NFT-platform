/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";

export default function Logo() {
  return (
    <div className="logo row">
      <div className="row center" style={{fontFamily:"fantasy"}}>
        <h5>KAMIS</h5>
        <img src="images/logo.png" alt="logo" width={150} />
        <h5>WORLD</h5>
      </div>
      {/* <div>{companyName}</div>  */}
    </div>
  );
}
