const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { userRepository } = require('./repositories');
const { validPassword } = require('./util/passwordUtils');

async function verifyCallback(username, password, done) {
  try {
    let user = await userRepository.findOne(username);

    if (!user) { return done(null, false) }

    const isValid = validPassword(password, user.password_hash, user.salt);

    if (isValid) { return done(null, user); }

    return done(null, false);
  } catch(error) {
    done(error);
  }
}

passport.use(new LocalStrategy(verifyCallback));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    let user = await userRepository.getById(userId);

    if (user) { done(null, user); } 
  } catch (error) { 
    done(error);
  } 
});

module.exports = {
  passport: passport
}