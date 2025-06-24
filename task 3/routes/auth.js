const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send('User registered');
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('Logged in');
});

module.exports = router;