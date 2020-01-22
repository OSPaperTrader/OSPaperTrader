import React from 'react';

class Watchlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.watchlist);
    return (
      <div className="container-inner">
        <h1>{JSON.stringify(this.props.watchlist)}</h1>
      </div>
    );
  }
}

export default Watchlist;
