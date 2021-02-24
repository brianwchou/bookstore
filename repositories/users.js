const db = require('../db');

function hasUsername(username) {}

async function addUser({ username, firstName, lastName, email, password }) {
  return db.query(
    'INSERT INTO users(firstname, lastname, email, password, username) VALUES ($1,$2,$3,$4,$5)',
    [username, firstName, lastName, email, password]
  );
}

async function getUserRecordById(id) {}

module.exports = {
  hasUsername,
  addUser,
  getUserRecordById,
};
