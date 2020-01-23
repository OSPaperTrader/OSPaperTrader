import React from 'react';

class TransactionRow extends React.Component {
  render() {
    console.log('Transactionrow:  ', this.props.stockData);
    return (
      <div>
        <p className="stockData">
          {new Date(
            Date.parse(this.props.stockData.trans_date)
          ).toLocaleDateString()}
        </p>
        <p className="stockData">{this.props.stockData.symbol}</p>
        <p className="stockData">{this.props.stockData.purchased_price}</p>
        <p className="stockData">{this.props.stockData.qty_purchased}</p>
        <p className="stockData">{this.props.currPrice}</p>
      </div>
    );
  }
}

export default TransactionRow;
