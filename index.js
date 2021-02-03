const express = require('express');
const bodyParser = require('body-parser');
const {
    deleteBooks, 
    addBookEntry, 
    getAllBooks, 
    getBookEntry
} = require('./booksController');
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get("/books", getAllBooks);
app.get("/books/:id", getBookEntry);
app.post("/books", addBookEntry);
app.delete("/books/:id", deleteBooks);

// unspecified request handler
app.get('*', function(req, res){
    res.status(404).send('route not found');
});

app.listen(port, () => {
    console.log(`app is running on port:${port}`);
});
