const db = require('../db');

function hasUsername(username) {}

async function addUser({ username, firstName, lastName, email, password }) {
  return db.query(
    'INSERT INTO users(firstname, lastname, email, password, username) VALUES ($1,$2,$3,$4,$5)',
    [username, firstName, lastName, email, password]
  );
}

async function getUserRecordById(id) {
  return db.query('Select * FROM users WHERE id=$1', [id]).then((res) => {
    return res.rows[0];
  });
}

module.exports = {
  hasUsername,
  addUser,
  getUserRecordById,
};
