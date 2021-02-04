const express = require("express");
const bodyParser = require("body-parser");
const {
  unspecifiedRouteErrorHandler,
} = require("./controllers/errorController");

const booksRouter = require("./routers");

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use("/books", booksRouter);
app.get("*", unspecifiedRouteErrorHandler);

app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});
