import React, { Component } from 'react';
import './App.css';
import IncrementButton from './components/IncrementButton.jsx'

class App extends Component {
  constructor() {
    super();

  }

  render() {
    console.log(IncrementButton)
    return (
      <div className="App">
        <h1 className="App__Title">OSPaperTrader</h1>
        <IncrementButton />
      </div>
    );
  }
}

export default App;
