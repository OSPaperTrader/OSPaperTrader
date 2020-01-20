import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      stocks: [],
    };
  }


  render() {
    return (
      <div className="App">
        <h1 className="App__Title">OSPaperTrader</h1>
      </div>
    );
  }
}

export default App;
