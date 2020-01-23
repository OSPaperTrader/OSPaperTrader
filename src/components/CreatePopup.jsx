import React from 'react';


class CreatePopup extends React.Component {
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
            <div className="flex">
              <label>Email</label>
              <input id="email" aria-label="email" name="email" type="email" placeholder="email" required/>
            </div>
            <div className="flex">
              <label>Password</label>
              <input id="password" aria-label="password" name="password" type="password" placeholder="password" required/>
            </div>
            <button name="submit" type='submit' value="Submit">Login</button>
          </form>
        </div>
      </section>
    )
  }
}

export default CreatePopup;