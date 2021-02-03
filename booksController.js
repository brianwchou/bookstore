const booksDB = require('./booksDB');

const validIdMiddleware = (req, res, next) => {
    const { id } = req.params;
    const index = Number(id);

    if (index < 0 || index >= booksDB.length) {
        res.send("record id is out of bounds").status(409);
        return;
    } 
    next();
}
 
const addBookEntry = (req, res) => {
    const newBookEntry = req.body;
    booksDB.push(newBookEntry);
    res.send("record creation sucessful").status(201);
}

const getAllBooks = (req, res) => {
    res.send(booksDB);
}

const getBookEntry = (req, res) => {
    const { id } = req.params;
    const recordIndex = Number(id);

    res.json(booksDB[recordIndex]).status(200);
}

const updateBookEntry = (req, res) => {
    const { id } = req.params;
    const editedBookEntry = req.body;

    const indexToUpdate = Number(id);

    booksDB[indexToUpdate] = editedBookEntry;

    res.send("record updated successfuly").status(200);
}

const deleteBooks = (req, res) => {
    const { id } = req.params;
    const indexToDelete = Number(id);

    booksDB.splice(indexToDelete, 1);

    res.send("delete successful").status(400);
}

module.exports = {
    deleteBooks,
    addBookEntry,
    getBookEntry,
    getAllBooks,
    updateBookEntry,
    validIdMiddleware
}