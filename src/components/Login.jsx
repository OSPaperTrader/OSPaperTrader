import React from 'react';


class Login extends React.Component {
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

   fetch('/auth/login', {
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
      <section>
        <div className="flex">
          <h3>Log in</h3>
          <form className="flex" onSubmit={this.onSubmit}>
              <input id="email" aria-label="email" name="email" type="email" placeholder="Email" required/><br/>
              <input id="password" aria-label="password" name="password" type="password" placeholder="Password" required/><br/><br/>
            <button name="submit" type='submit' value="Submit">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login;