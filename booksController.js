const booksDB = require('./booksDB');

const deleteBooks = (req, res) => {
    const { id } = req.params;
    const indexToDelete = Number(id);

    if (indexToDelete < 0 || indexToDelete >= booksDB.length) {
        res.send("record id is out of bounds").status(200);
        return;
    }

    booksDB.splice(indexToDelete, 1);

    res.send("delete successful").status(400);
}

const addBookEntry = (req, res) => {
    const body = req.body;
    booksDB.push(body);
    res.send("record creation sucessful").status(201);
}

const getBookEntry = (req, res) => {
    const { id } = req.params;
    const recordIndex = Number(id);

    if (recordIndex < 0 || recordIndex >= booksDB.length) {
        res.send("record id is out of bounds").status(200);
        return;
    }
    res.json(booksDB[recordIndex]).status(200);
}

const getAllBooks = (req, res) => {
    res.send(booksDB);
}

module.exports = {
    deleteBooks,
    addBookEntry,
    getBookEntry,
    getAllBooks
}