import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const increment = () => {
    setCount(count + 1);
    alert("Hello! Member");
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  const handleSubmit = () => {
    const euro = parseFloat(amount);

    if (isNaN(euro)) {
      alert("Enter Amount");
      return;
    }

    const rupees = euro * 80;
    alert("Converting to Euro Amount is " + rupees);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>{count}</h2>

      <button onClick={increment}>Increment</button>
      <br />

      <button onClick={decrement}>Decrement</button>
      <br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say welcome
      </button>
      <br />

      <button onClick={onPress}>Click on me</button>

      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>

      <label>Amount: </label>

      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />

      <label>Currency: </label>

      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;