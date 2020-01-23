import React from "react";

class TransactionRow extends React.Component {
  render() {
    console.log("Transaction row:  ", this.props.stockData);
    return (
      <tr>
        <td>
          {new Date(
            Date.parse(this.props.stockData.trans_date)
          ).toLocaleDateString()}
        </td>
        <td>{this.props.stockData.symbol}</td>
        <td>{this.props.stockData.purchased_price}</td>
        <td>{this.props.stockData.qty_purchased}</td>
        <td>{this.props.currPrice || "unavailable"}</td>
        {/* <th> </th>
        <td className="stockData">
          {new Date(
            Date.parse(this.props.stockData.trans_date)
          ).toLocaleDateString()}
        </td>
        <td className="stockData">{this.props.stockData.symbol}</td>
        <td className="stockData">{this.props.stockData.purchased_price}</td>
        <td className="stockData">{this.props.stockData.qty_purchased}</td>
        <td className="stockData">{this.props.currPrice || "unavailable"}</td>
        <td>
          <button
            onClick={() =>
              console.log(
                "Sell Button Clicked for " + this.props.stockData.symbol
              )
            }
          >
            Sell
          </button>
        </td> */}
      </tr>
    );
  }
}

export default TransactionRow;
