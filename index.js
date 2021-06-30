const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const passport = require('passport');
const { pool } = require('./db')
const LocalStrategy = require('passport-local').Strategy;

const { userRepository } = require('./repositories');

const {
  bookRouter,
  errorRouter,
  userRouter,
  authRouter,
} = require('./routers');
const { validPassword } = require('./util/passwordUtils');

const app = express();
const PORT = 8080;

passport.use(
  new LocalStrategy(async function(username, password, done) {
    try {
      let user = await userRepository.findOne(username);

      if (!user) { return done(null, false) }

      const isValid = validPassword(password, user.password_hash, user.salt);

      if (isValid) { return done(null, user); }

      return done(null, false);
    } catch(error) {
      done(error);
    }
  })
);

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
app.use(bodyParser.json());
app.use(session({
  store: new pgSession({
    pool: pool
  }),
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/books', bookRouter);
app.use('/users', userRouter);
app.use('*', errorRouter);

app.listen(PORT, () => {
  console.log(`app is running on port:${PORT}`);
});
