const express = require('express');
const bodyParser = require('body-parser');

const { bookRouter, errorRouter, userRouter } = require('./routers');
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use('/books', bookRouter);
app.use('/users', userRouter);
app.use('*', errorRouter);

app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});
