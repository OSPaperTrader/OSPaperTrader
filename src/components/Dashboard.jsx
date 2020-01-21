import React from "react";
import Watchlist from "./Watchlist.jsx";
import Portfolio from "./Portfolio.jsx";
import Navbar from "./Navbar.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchListEntries: [
        {
          symbol: "XYZ",
          name: "Xtreme Yoga Zone",
          currentPrice: 99.87
        },
        
      ],
      portfolioEntries: [
        { name: "AAPL", numOfShares: 59, buyingPrice: 300, dateBought: 200116 }
      ]
    };
  }
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
