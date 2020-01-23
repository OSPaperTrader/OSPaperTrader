import React from 'react';
import { connect } from 'react-redux';
import { buySecurity, getWatchlist } from '../Actions/actionCreator';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A new stock was submitted: ' + this.state.value);
    this.props.dispatch(addToWatchList(this.state.value));
    event.preventDefault();
  }

  render() {
    return (
      <tr>
        <td>{this.props.stockData['1. symbol']}</td>
        <td>{this.props.stockData['2. price']}</td>
        <td>{this.props.stockData['3. volume']}</td>
        <td>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
          <button>X</button>
        </td>
        {/* <td>{this.props.stockData['1. symbol']}</td>
        <td>{this.props.stockData['2. price']}</td>
        <td>{this.props.stockData['3. volume']}</td> */}
        <td>
          <button
            onClick={() => {
              this.props.dispatch(
                buySecurity({
                  symbol: this.props.stockData['1. symbol'],
                  qty: this.state.value,
                  price: this.props.stockData['2. price']
                })
              );
              this.state.value = '';
            }}
          >
            Buy
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  null
)(Row);
