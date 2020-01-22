import React from "react";
import RowPort from "./RowPort.jsx";

class Table extends React.Component {
  render() {
    const stockDataArray = this.props.watchlist["Stock Quotes"];
    let rowArray = [];
    if (stockDataArray) {
      rowArray = stockDataArray.map((el, index) => {
        return <RowPort stockData={el} key={index} />;
      });
    }
    return (
      <div>
        <h2>Watchlist</h2>
        <table style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Symbol</th>
              <th>Current Price</th>
              <th colSpan="2">Volume</th>
            </tr>
          </thead>
          <tbody>{rowArray}</tbody>
        </table>
      </div>
    );
  }
}

export default TablePort;
