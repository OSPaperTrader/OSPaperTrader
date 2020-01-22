import React from 'react';
import TransactionTable from './TransactionTable.jsx';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="container-inner">
        <h1>Portfolio</h1>
        {/* <h1>Cash: {this.props.cash}</h1> */}
        <TransactionTable
          transData={this.props.transData}
          watchlistData={this.props.watchlistData}
        />
      </div>
    );
  }
}

export default Portfolio;
