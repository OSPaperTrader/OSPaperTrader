import React from 'react';

class Row extends React.Component {
  render() {
    // console.log('ROW ', this.props.stockData);
    return (
      <div >
        <p className='stockData'>{this.props.stockData["1. symbol"]}</p>
        <p className='stockData'>{this.props.stockData["2. price"]}</p>
        <p className='stockData'>{this.props.stockData["3. volume"]}</p>
      </div>
    );
  }
}

export default Row;
