import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Watchlist from './Watchlist.jsx';
import Portfolio from './Portfolio.jsx';
import Navbar from './Navbar.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import {
  getPortfolio,
  getWatchlist,
  updateWatchlist
} from '../Actions/actionCreator';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <Navbar />
            <div className="container-outer">
              <Watchlist watchlist={this.props.watchlist} />
              <button
                onClick={() => {
                  this.props.dispatch(updateWatchlist(this.props.email));
                }}
              >
                Update Watchlist
              </button>
              <button
                onClick={() => {
                  this.props.dispatch(getWatchlist());
                }}
              >
                Get Watchlist
              </button>
              <button
                onClick={() => {
                  this.props.dispatch(getPortfolio(this.props.email));
                }}
              >
                Get Portfolio
              </button>
              <Portfolio
                cash={this.props.cash}
                watchlistData={this.props.watchlist}
                transData={this.props.portfolio.transactions}
              />
            </div>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    watchlist: state.watchlist,
    portfolio: state.portfolio,
    cash: state.cash,
    username: state.username
  };
}

export default connect(
  mapStateToProps,
  null
)(Dashboard);
