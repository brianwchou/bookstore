const express = require('express');
const bodyParser = require('body-parser');
const { bookRoutes, errorRoutes, customerRoutes } = require('./routers');
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/customers', customerRoutes);
app.use('*', errorRoutes);

app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});
