import React from "react";
import TransactionRow from "./TransactionRow.jsx";

class TransactionTable extends React.Component {
  render() {
    let stockDataArray = [];
    let rowArray = [];
    let currPriceCache = {};
    this.props.watchlistData["Stock Quotes"].forEach(el => {
      currPriceCache[el["1. symbol"]] = el["2. price"];
    });

    // console.log("cache", currPriceCache);

    if (this.props.transData[0]) {
      stockDataArray = this.props.transData;
      rowArray = stockDataArray.map((el, index) => {
        return (
          <TransactionRow
            key={index}
            currPrice={currPriceCache[el.symbol]}
            stockData={el}
          />
        );
      });
    }

    return (
      <div>
        <table style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Buy Date</th>
              <th>Symbol</th>
              <th>Buy Price</th>
              <th># Shares</th>
              <th>Curr Price</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>{rowArray}</tbody>
        </table>
      </div>
    );
  }
}

export default TransactionTable;
