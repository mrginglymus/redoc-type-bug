import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RedocStandalone} from "redoc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RedocStandalone />
      </header>
    </div>
  );
}

export default App;
