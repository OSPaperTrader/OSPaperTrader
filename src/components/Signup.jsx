import React from 'react';

class Signup extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = {}

   for (let entry of data.entries()) {
       user[entry[0]] = entry[1]
   }

   fetch('/auth/signup', {
     method: 'POST',
     body: JSON.stringify(user),
     headers: {
       'Content-Type': 'application/json'
     }
   })
   .then( response => {
   
   })
   .catch(error => {
     console.error('Error:', error)
   })
  
  }

  render() {
    return (
      <div className="flex">
          <h1>Sign Up</h1>
          <form className="flex" onSubmit={this.onSubmit}>
            <input name="firstName" type="text" placeholder="First Name" required/><br/>
            <input name="lastName" type="text" placeholder="Last Name" required/><br/>
            <input name="email" type="email" placeholder="Email" required/><br/>
            <input name="password" type="password" placeholder="Password" required/><br/><br/>
            <button name="submit" type='submit' value="Submit">Submit</button>
          </form>
        </div>
    );
  }
}

export default Signup;
