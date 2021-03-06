import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../Actions/actionCreator';


class IncrementButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.dispatch(increment(5));
          }}
        >
          Increment
        </button>
        {/* <button onClick={increment}>Increment</button> */}
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

// const mapDispatchToProps = {
//   increment: () => increment(5)
// };

export default connect(
  mapStateToProps,
  null,
)(IncrementButton);
