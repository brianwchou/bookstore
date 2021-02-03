const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

let book =  {
    author: "john doe",
    title: "collection of things",
    quantity: 7
}

let books = [];
books.push(book);

app.use(bodyParser.json());

// get all records
app.get("/books", (req, res) => {
    res.send(books);
});

// fetch a single record
app.get("/books/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.json(book).status(200);
});

// create an entry in books
app.post("/books", (req, res) => {
    const body = req.body;
    books.push(body);
    res.send("record creation sucessful").status(201);
});

// delete a single record
app.delete("/books/:id", (req, res) => {
    const { id } = req.params;
    const indexToDelete = Number(id);

    if (indexToDelete < 0 || indexToDelete >= books.length) {
        res.send("record id is out of bounds").status(200);
        return;
    }

    books.splice(indexToDelete, 1);

    res.send("delete successful").status(400);
});

// unspecified request handler
app.get('*', function(req, res){
    res.status(404).send('route not found');
});

app.listen(port, () => {
    console.log(`app is running on port:${port}`);
});
