import React from 'react';
import logo from './logo.svg';
import './App.css';
import myLogger from './myLogger';

function App() {
  myLogger.info({
    message: 'Use a helper method if you want',
    additional: 'properties',
    are: 'passed along'
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload page.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
