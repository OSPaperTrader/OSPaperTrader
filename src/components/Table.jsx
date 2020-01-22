import React from 'react';
import Row from './Row.jsx';

class Table extends React.Component {
  render() {
    const stockDataArray = this.props.watchlist['Stock Quotes'];
    let rowArray = [];
    if (stockDataArray) {
      rowArray = stockDataArray.map(el => {
        return <Row stockData={el} />;
      });
    }
    return <div className="stock">{rowArray}</div>;
  }
}

export default Table;
