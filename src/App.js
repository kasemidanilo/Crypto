import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tickers from './components/Tickers';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>CRYPTO</h2>
      </div>
      <Tickers />
    </div>
  );
}

export default App;
