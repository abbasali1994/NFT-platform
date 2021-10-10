import React from "react";

export default function MintBtn({ mint, counter }) {
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
