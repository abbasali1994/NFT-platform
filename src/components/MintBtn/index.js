import React from "react";

export function MintBtn({ mint, counter }) {
  return (
    <div
      className={`hero-main-btn ${counter > 0 ? "clickable" : ""}`}
      onClick={mint}
    >
      <div className="element">
        <div className="text">Mint</div>
      </div>
    </div>
  );
}

export function ComingSoonBtn() {
  return (
    <div className="hero-main-btn" style={{ opacity: 0.5 }}>
      <div className="element">
        <div className="text">Coming Soon</div>
      </div>
    </div>
  );
}
