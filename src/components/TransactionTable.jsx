import React from 'react';
import TransactionRow from './TransactionRow.jsx';

class TransactionTable extends React.Component {
  render() {
    let stockDataArray = [];
    let rowArray = [];
    let currPriceCache = {};
    this.props.watchlistData['Stock Quotes'].forEach(el => {
      currPriceCache[el['1. symbol']] = el['2. price'];
    });

    console.log('cache', currPriceCache);

    if (this.props.transData[0]) {
      stockDataArray = this.props.transData;
      rowArray = stockDataArray.map(el => {
        return (
          <TransactionRow
            currPrice={currPriceCache[el.symbol]}
            stockData={el}
          />
        );
      });
    }
    return <div className="stock">{rowArray}</div>;
  }
}

export default TransactionTable;
