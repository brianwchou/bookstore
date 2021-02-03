const express = require('express');
const bodyParser = require('body-parser');
const {
    deleteBooks, 
    addBookEntry, 
    getAllBooks, 
    getBookEntry,
    updateBookEntry,
    validIdMiddleware
} = require('./booksController');
const { unspecifiedRouteErrorHandler } = require('./errorController');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get("/books", getAllBooks);
app.get("/books/:id", validIdMiddleware, getBookEntry);
app.post("/books", addBookEntry);
app.put("/books/:id", validIdMiddleware, updateBookEntry);
app.delete("/books/:id", validIdMiddleware, deleteBooks);

app.get('*', unspecifiedRouteErrorHandler);

app.listen(port, () => {
    console.log(`app is running on port:${port}`);
});
