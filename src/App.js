import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard.jsx";


class App extends Component {
  constructor() {
    super();
  }

  render() {
    
    return (
        <div className="App">
          <Dashboard />
        </div>
    );
  }
}

export default App;
