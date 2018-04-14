import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MetricTabs from './components/MetricTabs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MODULO de Administrador</h1>
        </header>
          <MetricTabs/>
      </div>
    );
  }
}

export default App;
