import React from "react";
import TablePort from "./Table.jsx";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.watchlist);
    return (
      <div className="container-inner">
        <h1>Portfolio</h1>
        {/* <TablePort watchlist={this.props.watchlist} /> */}
      </div>
    );
  }
}

export default Portfolio;
