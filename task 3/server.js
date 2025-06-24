require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const app = express();

mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/auth', require('./routes/auth'));
app.use('/vehicle', require('./routes/vehicle'));

app.listen(3000, () => console.log('Server running on port 3000'));
