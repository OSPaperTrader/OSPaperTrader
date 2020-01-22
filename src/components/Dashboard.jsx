import React from 'react';
import Watchlist from './Watchlist.jsx';
import Portfolio from './Portfolio.jsx';
import Navbar from './Navbar.jsx';
import { getPortfolio } from '../Actions/actionCreator';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-outer">
          <Watchlist watchlist={this.props.watchlist} />
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
