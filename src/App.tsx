import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scores from './components/Scores/Scores';
import Standings from './components/Standings/Standings';
import Clock from './components/Clock/Clock.jsx';
import Svg from './components/Svg/Svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Scores/>
        <Standings/>
        <Clock/>
        <Svg/>
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
