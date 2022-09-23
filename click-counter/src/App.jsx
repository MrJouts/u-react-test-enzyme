import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const handleDecrement = () => {
    if (count < 1) {
      setError(true);
    } else {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    if (error) {
      setError(false);
    }
    setCount(count + 1);
  };

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <div
        data-test="error-message"
        className={`error ${error ? "" : "hidden"} `}
      >
        The counter can't go below zero
      </div>

      <button data-test="decrement-button" onClick={handleDecrement}>
        Decrement counter
      </button>
      <button data-test="increment-button" onClick={handleIncrement}>
        Increment counter
      </button>
    </div>
  );
}

export default App;
