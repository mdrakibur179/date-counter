/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./styles/style.css";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div style={{ margin: "1rem 1rem" }}>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span style={{ padding: "2rem 2rem" }}>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          style={{ margin: "2rem 2rem", height: "5rem", fontSize: "2rem" }}
          type="number"
          onChange={(e) => setCount(Number(e.target.value))}
          value={count}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is - "
            : count > 0
            ? `${count} ${count > 1 ? "days" : "day"} after will be - `
            : count < 0
            ? `${Math.abs(count)} ${count < -1 ? "days" : "day"} ago was - `
            : ""}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {(count !== 0 || step !== 1) ? <div>
        <button onClick={handleReset}>Reset</button>
      </div> : null}
    </div>
  );
}

export default App;
