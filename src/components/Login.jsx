import React from 'react';
import { connect } from 'react-redux';
import { setEmail } from '../Actions/actionCreator';
import Navbar from './Navbar.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = {};

    for (let entry of data.entries()) {
      user[entry[0]] = entry[1];
    }

    fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        this.props.dispatch(setEmail(user.email));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <section>
        <Navbar></Navbar>
        <div className="flex">
          <h3>Log in</h3>
          <form className="flex" onSubmit={this.onSubmit}>
            <input
              id="email"
              aria-label="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <br />
            <input
              id="password"
              aria-label="password"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <br />
            <br />
            <button name="submit" type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  null
)(Login);
