import React from 'react';
import Table from './Table.jsx';

class Watchlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.watchlist);
    return (
      <div className="container-inner">
        <h1>watch</h1>
        <Table watchlist={this.props.watchlist} />
      </div>
    );
  }
}

export default Watchlist;
