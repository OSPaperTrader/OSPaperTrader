import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <div className="flex">
          <h1>Sign Up</h1>
          <form className="flex" onSubmit={this.onSubmit}>
            <input name="firstName" type="text" placeholder="First Name" required/><br/>
            <input name="lastName" type="text" placeholder="Last Name"/><br/>
            <input name="email" type="email" placeholder="Email" required/><br/>
            <input name="password" type="password" placeholder="Password" required/><br/><br/>
            <button name="submit" type='submit' value="Submit">Submit</button>
          </form>
        </div>
    );
  }
}

export default Signup;
