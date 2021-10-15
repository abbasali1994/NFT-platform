import React from "react";
export function MintBtn({ mint, counter }) {
  return (
    <div
      class={`hero-main-btn ${counter > 0 ? "clickable" : ""}`}
      onClick={mint}
    >
      <div class="element">
        <div class="text">Mint</div>
      </div>
    </div>
  );
}

export function ComingSoonBtn() {
  return (
    <div class="hero-main-btn" style={{ opacity: 0.5 }}>
      <div class="element">
        <div class="text">Coming Soon</div>
      </div>
    </div>
  );
}
