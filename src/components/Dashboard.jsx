import React from "react";
import Watchlist from "./Watchlist.jsx";
import Portfolio from "./Portfolio.jsx";
import Navbar from "./Navbar.jsx";
import Signup from './Signup.jsx'
import { BrowserRouter as Router, Route} from "react-router-dom";


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
        <Router>
          <Route exact path='/'>
            <Navbar/>
            <div className="container-outer">
              <Watchlist />
              <Portfolio />
            </div>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default Dashboard;
