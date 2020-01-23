import React from "react";
import CreatePopup from './CreatePopup.jsx';
import { Link } from "react-router-dom";


class Navbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showPopup: false
    }
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup(){
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render() {
    return (
          <div className="topnav">
            <div className="nav-logo">
              <h3>PaperTrader®</h3>
            </div>
            <Link to="/signup">
              <button>Register</button>
            </Link>
            <button onClick={this.togglePopup}>Login</button>
            {this.state.showPopup ? (
              <CreatePopup/>
            ) : null}
          </div>
    );
  }
}



export default Navbar;
