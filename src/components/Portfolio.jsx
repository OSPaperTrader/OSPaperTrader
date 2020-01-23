import React from 'react';
import TransactionTable from './TransactionTable.jsx';
import TablePort from './Table.jsx';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.watchlist);
    return (
      <div className="container-inner">
        <h1>Portfolio</h1>
        <h1>Cash: {this.props.cash}</h1>
        <TransactionTable
          transData={this.props.transData}
          watchlistData={this.props.watchlistData}
        />
        {/* <TablePort watchlist={this.props.watchlist} /> */}
      </div>
    );
  }
}

export default Portfolio;
