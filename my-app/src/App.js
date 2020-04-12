import React from 'react';
import logo from './project.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Project App
        </p>
        <p>
          Now we have to:
          <ul>
            <li>Create the server</li>
            <li>Check PWA installatio</li>
            <li>Develop the app</li>
          </ul>
        </p>
    </div>
  );
}

export default App;
