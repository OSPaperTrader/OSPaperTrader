import React from "react";
import Row from "./Row.jsx";

class Table extends React.Component {
  render() {
    const stockDataArray = this.props.watchlist["Stock Quotes"];
    let rowArray = [];
    if (stockDataArray) {
      rowArray = stockDataArray.map((el, index) => {
        return <Row stockData={el} key={index} />;
      });
    }
    return (
      <div>
        <h2>Watchlist</h2>
        <table style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> </th>
              <th>Symbol</th>
              <th>Current Price</th>
              <th >Volume</th>
              <th >QTY</th>
            </tr>
          </thead>
          <tbody>{rowArray}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
