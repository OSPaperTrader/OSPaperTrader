import React from "react";
import { Link } from "react-router-dom";


class Navbar extends React.Component {
  constructor(props) {
    super();
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    fetch('/auth/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( response => {
    
    })
    .catch(error => {
      console.error('Error:', error)
    })
    console.log(localStorage)
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
            <Link to='/login'>
            <button>Login</button>
            </Link>
            <button onClick={this.onClick} >Logout</button>
          </div>
    );
  }
}



export default Navbar;
