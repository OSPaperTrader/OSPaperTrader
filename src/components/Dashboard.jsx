import React from 'react';
import Watchlist from './Watchlist.jsx';
import Portfolio from './Portfolio.jsx';
import Navbar from './Navbar.jsx';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('dashboard props', this.props);
    return (
      <div>
        <Navbar />
        <div className="container-outer">
          <Watchlist watchlist={this.props.watchlist} />
          <Portfolio />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    watchlist: state.watchlist,
    portfolio: state.portfolio,
    username: state.username
  };
}

export default connect(
  mapStateToProps,
  null
)(Dashboard);
