import React, { useState } from "react";
import "./Counter.css";

const counter = function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count === 20) {
      return;
    }

    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div>
      <div className="page">
        <h1>Counter App</h1>
        <div className="symbols">
          <button onClick={incrementCount}>+</button>
          <div>{count}</div>
          <button onClick={decrementCount}>-</button>
        </div>
      </div>
    </div>
  );
};

export default counter;
