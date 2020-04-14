import React from "react";
import logo from "./project.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Project App</h2>
      <p>Offline use ok.</p>
      <p>Now we have to:</p>

      <ul>
        <li>Create the server.</li>
        <li>Check PWA installation.</li>
        <li>Develop the app.</li>
      </ul>
    </div>
  );
}

export default App;
