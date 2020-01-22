import React from "react";

class Row extends React.Component {
  render() {
    return (
      <tr>
        <td>JimboCorp</td>
        <td>{this.props.stockData["1. symbol"]}</td>
        <td>{this.props.stockData["2. price"]}</td>
        <td>{this.props.stockData["3. volume"]}</td>
        <td>
          <button className="btn btn-primary">Buy</button>
        </td>
        <td>
          <button className="btn btn-danger">Remove</button>
        </td>
      </tr>
    );
  }
}

export default Row;
