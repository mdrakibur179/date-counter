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
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div style={{ margin: "1rem 1rem" }}>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span style={{ padding: "2rem 2rem" }}>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span style={{ padding: "2rem 2rem" }}>Count: {count}</span>
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
    </div>
  );
}

export default App;
