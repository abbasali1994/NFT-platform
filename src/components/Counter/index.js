import * as React from "react";
import "./style.css";
export default function Counter({ counter, setCounter }) {
  const handleClick = (inc) => {
    if (counter === 0 && inc === -1) return;
    if (counter === 3 && inc === 1) return;
    setCounter(counter + inc);
  };
  return (
    <div class="row center">
      <h1 class="counter">{counter}</h1>
      <div class="column center">
        <button class="counterBtn" onClick={() => handleClick(1)}>
          <div>
            <svg
              stroke="currentColor"
              fill="white"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="50"
              width="50"
            >
              <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
            </svg>
          </div>
        </button>
        <button class="counterBtn" onClick={() => handleClick(-1)}>
          <div>
            <svg
              stroke="currentColor"
              fill="white"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="50"
              width="50"
            >
              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
