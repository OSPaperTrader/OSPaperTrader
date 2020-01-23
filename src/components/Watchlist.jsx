import React from 'react';
import Table from './Table.jsx';
import WatchlistAddForm from './WatchlistAddForm.jsx';

class Watchlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.watchlist);
    return (
      <div className="container-inner">
        <Table watchlist={this.props.watchlist} />
        <WatchlistAddForm />
      </div>
    );
  }
}

export default Watchlist;
