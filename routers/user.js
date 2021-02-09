const { Router } = require('express');
const userRouter = Router();
const { userDB } = require('../db');

userRouter.get('/find', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;

  let record = userDB.find((entry) => {
    if (entry.firstName === firstName || entry.lastName === lastName) {
      return entry;
    }
  });

  res.status(200).json(record);
});

userRouter.post('/create', (req, res) => {
  let { username, firstName, lastName, email, password } = req.body;

  let user = userDB.find((entry) => {
    if (entry.username === username) return entry;
  });

  if (user) {
    res.status(409).send('username is already in use');
    return;
  }

  userDB.push({
    id: userDB.length,
    username: username,
    firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  res.status(200).send('added a customer record');
});

userRouter.get('/all', (req, res) => {
  res.status(200).json(userDB);
});

module.exports = userRouter;
