import React from "react";
import Watchlist from "./Watchlist.jsx";
import Portfolio from "./Portfolio.jsx";
import Navbar from "./Navbar.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-outer">
          <Watchlist />
          <Portfolio />
        </div>
      </div>
    );
  }
}

export default Dashboard;
