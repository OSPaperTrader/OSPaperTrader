import React from 'react';
import { connect } from 'react-redux';
import { addToWatchlist } from '../Actions/actionCreator';

class WatchlistAddForm extends React.Component {
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
    this.props.dispatch(addToWatchlist(this.state.value));
    event.preventDefault();
  }

  render() {
    return (
      <form className="h-form" onSubmit={this.handleSubmit}>
        <label className="h-label">
          <input
            className="h-input"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input className="h-btn" type="submit" value="Add To Watchlist" />
      </form>
    );
  }
}

export default connect(
  null,
  null
)(WatchlistAddForm);
