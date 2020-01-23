import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="topnav">
        <div className="nav-logo">
          <h2>PaperTrader®</h2>
        </div>
        <Link to="/signup">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    );
  }
}

export default Navbar;
