// express router for authorzation.
const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models/stocks-db')

// route paths are prepended with /auth

// route to check if router is working
// router.get('/', (req, res) => {
//   res.json({
//     message: 'router test'
//   })
// });

// users can login to the app with valid email/password
// users cannot login to the app with a blank or missing email
// users cannot login to the app with a blank or incorrect password
const validUser = user => {
  const validEmail = typeof user.email == 'string' && user.email.trim() != '';
  const validPassword = typeof user.password == 'string' && user.password.trim() != '' && user.password.trim().length > 6;

  return validEmail && validPassword;
}

const setUserIdCookie = (req, res, id) => {
  res.cookie('user_id', id, {
    httpOnly: true,
    //when you are in production make it true
    secure: req.app.get('env') != 'development', 
    signed: true
  });
}

// post request with user infromation to the server
router.post('/signup', (req, res, next) => {
  console.log('coming', req.body)
  const user = {
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  }

  console.log('user', user)

  if(validUser(user)) {
    //if this user is valid, we want to check if the user is unique to our database
    db.query(`select * from users where email = '${user.email}'`)
      .then( result => {
        //this is a unique email
          // we can hash the password
          if(!result.rowCount){
            bcrypt.hash(user.password, 5)
              .then(hash => {
              //insert user into our database
                user.password = hash;
                //query created at the queries file
                db.query(`insert into users (email, firstname, lastname, password) values ('${user.email}', '${user.firstName}', '${user.lastName}', '${user.password}')`)
                  .then( insertResponse => {
                    db.query(`select * from users where email ='${user.email}'`)
                      .then( id => {
                        console.log(id.rows[0].id)
                        //cookie should be made here
                        //we can redirect
                        setUserIdCookie(req, res, id.row[0].id);

                        res.json({
                          // id: id.rows[0].id,
                          message: 'Successful Signup'
                        });
                      });
                  });
                }) 
            } else {
              //email in use
              next(new Error('Email in use'));
              }
          })
  } else {
    // use next pass in an error to the error handler
    next(new Error('Invalid user'))
    }
});


router.post('/login', (req, res, next) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  }

  if(validUser(user)) {
    //check to see if in db
    db.query(`select * from users where email = '${user.email}'`)
     .then(result => {
       
        if(result.rows) {
          // compare password with hashed password
          bcrypt.compare(user.password, result.rows[0].password)
            .then(matched => {
              // if the passwords matched 
              if(matched) {
                //setting the set cookie header
                // set a cookie named user_id and set equal to user.id and pass in the options that will tell it to make it secure 
                
                setUserIdCookie(req,res, result.rows[0].id);

                res.json({
                  // id: user.id,
                  message: 'Loggin in...'
                });
              } else {
                next(new Error('Invalid login'))
              }
            });
        } else {
        next(new Error('Invalid login'));
        }
     });
  } else {
    next(new Error('Invalid  login'));
  }

  db.query(`select * from users where email = '${user.email}'`)
    .then(user => {
      if(user.rows) {
        //bcrypt.compareSync will hash the plain text passsword and compare
        if(bcrypt.compareSync(req.body.password, user.rows[0].password)) {
          console.log('here',req.session)
          req.session.user = user.rows[0].email;
          
          // return res.redirect(200,'http://localhost:8080');
        } else {
          res.redirect('/signup');
        }
      } else {
        res.redirect('/signup');
      }
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.clearCookie('connect.sid')
  res.json({
    message: 'locked'
  })
})



module.exports = router;