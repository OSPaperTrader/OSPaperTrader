import React from 'react';
import { increment } from '../Actions/actionCreator';
import { INCREMENT } from '../Actions/actionTypes'
import { connect } from 'react-redux';

class IncrementButton extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <button onClick={() => { this.props.dispatch({ type: INCREMENT, payload: 5 }) }}>Increment</button>
        <h1>{this.props.value}</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.value
  }
}


export default connect(mapStateToProps, null)(IncrementButton)

