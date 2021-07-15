const express = require('express');
const router = express.Router();
const userSignUp = require('../models/userModels');


router.post('/signup', (req, res) => {
  const signedUpUser = new userSignUp({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  signedUpUser.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      response.json(err)
    })
});



module.exports = router;