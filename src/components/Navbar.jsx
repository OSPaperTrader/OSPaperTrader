import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <div className="nav-logo">
          <h3>PaperTrader®</h3>
        </div>
        <a href="#register">Register</a>
        <a href="#login">Login</a>
      </div>
    );
  }
}

export default Navbar;
