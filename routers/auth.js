const { Router } = require('express');
const passport = require('passport');
const { userRepository } = require('../repositories');
const { genPassword } = require('../util/passwordUtils');

const authRouter = Router();

authRouter.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      console.log('called on success');
      res.redirect('/')
    }
);

async function checkExistingUsername(req, res, next) {
  const { username } = req.body;
  const usernameExists = await userRepository.hasUsername(username);
  if (usernameExists) { 
    res.send('username exists');
  } else {
    next();
  }
}

async function checkExistingEmail(req, res, next) {
  const { email } = req.body;
  const emailExists = await userRepository.hasEmail(email);
  if (emailExists) { 
    res.send('email exists');
  } else {
    next();
  }
}

async function saveNewUserCred(req, res) {
  const {username, firstName, lastName, email, password} = req.body;
  const {salt, hash} = genPassword(password);

  await userRepository.addUser({
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
    hash: hash,
    salt: salt
  });
  res.send('accepted user credentials');
}

authRouter.post('/register', checkExistingUsername, checkExistingEmail, saveNewUserCred);

authRouter.post('/logout', function(req, res) {
  req.logout();
  res.send('sucessfully logged out');
});

module.exports = authRouter;