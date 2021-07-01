const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const { pool } = require('./db')
const { passport } = require('./conifg');

const {
  bookRouter,
  errorRouter,
  userRouter,
  authRouter,
} = require('./routers');

const app = express();
const PORT = 8080;

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
