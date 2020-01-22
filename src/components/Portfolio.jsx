import React from "react";
import TransactionTable from "./TransactionTable.jsx";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-inner">
        <h2>Portfolio</h2>
        <h1>Cash: {this.props.cash}</h1>
        <TransactionTable
          transData={this.props.transData}
          watchlistData={this.props.watchlistData}
        />
      </div>
    );
  }
}

export default Portfolio;
