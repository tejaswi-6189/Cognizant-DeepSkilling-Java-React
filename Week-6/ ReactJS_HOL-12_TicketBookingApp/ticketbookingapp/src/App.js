import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        <>
          <h2>Welcome User</h2>

          <h3>Flight Details</h3>

          <p>Flight : AI202</p>
          <p>From : Vijayawada</p>
          <p>To : Hyderabad</p>
          <p>Price : ₹4500</p>

          <button>Book Ticket</button>

          <br /><br />

          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>Welcome Guest</h2>

          <h3>Flight Details</h3>

          <p>Flight : AI202</p>
          <p>From : Vijayawada</p>
          <p>To : Hyderabad</p>
          <p>Price : ₹4500</p>

          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </>
      )}

    </div>
  );
}

export default App;