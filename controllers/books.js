const { bookDB } = require('../db');

const addBookEntry = (req, res) => {
  const newBookEntry = req.body;
  bookDB.push(newBookEntry);
  res.send('record creation sucessful').status(201);
};

const getAllBooks = (req, res) => {
  res.send(bookDB);
};

const getBookEntry = (req, res) => {
  const { id } = req.params;
  const recordIndex = Number(id);

  res.json(bookDB[recordIndex]).status(200);
};

const updateBookEntry = (req, res) => {
  const { id } = req.params;
  const editedBookEntry = req.body;

  const indexToUpdate = Number(id);

  bookDB[indexToUpdate] = editedBookEntry;

  res.send('record updated successfuly').status(200);
};

const deleteBooks = (req, res) => {
  const { id } = req.params;
  const indexToDelete = Number(id);

  bookDB.splice(indexToDelete, 1);

  res.send('delete successful').status(400);
};

module.exports = {
  deleteBooks,
  addBookEntry,
  getBookEntry,
  getAllBooks,
  updateBookEntry,
};
