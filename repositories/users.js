const db = require('../db');

function hasUsername(username) {}

function addUser(userData) {
  db.query(
    'INSERT INTO users(firstname, lastname, email, password, username) VALUES ($1,$2,$3,$4,$5)',
    [username, firstName, lastName, email, password]
  ).then((res) => {
    console.log(res.rows);
  });
}

function getUserRecordById(id) {}

module.exports = {
  hasUsername,
  addUser,
  getUserRecordById,
};
