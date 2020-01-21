// express router for authorzation.
const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');

// route paths are prepended with /auth

// route to check if router is working
router.get('/', (req, res) => {
  console.log('inside auth')
  // res.json({
  //   message: 'router test'
  // })
});



module.exports = router;