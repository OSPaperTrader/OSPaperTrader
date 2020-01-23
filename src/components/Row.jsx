import React from "react";

class Row extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.stockData["1. symbol"]}</td>
        <td>{this.props.stockData["2. price"]}</td>
        <td>{this.props.stockData["3. volume"]}</td>
        <td>
          <button
            onClick={() =>
              console.log(
                "Buy Button Clicked for " + this.props.stockData["1. symbol"]
              )
            }
          >
            Buy
          </button>
        </td>
        <td>
          <button
            onClick={() =>
              console.log(
                "Remove Button Clicked for " + this.props.stockData["1. symbol"]
              )
            }
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default Row;
