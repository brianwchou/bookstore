const { Router } = require('express');
const customerRouter = Router();
const { customerDB } = require('../db');

customerRouter.get('/find', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;

  let record = customerDB.find((entry) => {
    if (entry.firstName === firstName || entry.lastName === lastName) {
      return entry;
    }
  });

  res.status(200).json(record);
});

customerRouter.post('/create', (req, res, next) => {
  let { username, firstName, lastName, email, password } = req.body;

  let customer = customerDB.find((entry) => {
    if (entry.username === username) return entry;
  });

  if (customer) {
    res.status(409).send('username is already in use');
    return;
  }

  customerDB.push({
    id: customerDB.length,
    username: username,
    firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  res.status(200).send('added a customer record');
});

customerRouter.get('/all', (req, res) => {
  res.status(200).json(customerDB);
});

module.exports = customerRouter;
