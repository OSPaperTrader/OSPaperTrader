import React from "react";
import TransactionTable from "./TransactionTable.jsx";
import TablePort from "./Table.jsx";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.watchlist);
    return (
      <div className="container-inner">
        <h2>Portfolio</h2>
        <h2>Cash: {this.props.cash}</h2>
        <TransactionTable
          transData={this.props.transData}
          watchlistData={this.props.watchlistData}
        />
      </div>
    );
  }
}

export default Portfolio;
