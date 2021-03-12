const db = require('../db');

async function hasUsername(username) {
  return db
    .query('SELECT 1 FROM users WHERE username=$1', [username])
    .then((res) => {
      return res.rows.length >= 1;
    });
}

async function addUser({ username, firstName, lastName, email, password }) {
  return db.query(
    'INSERT INTO users(username, firstname, lastname, email, password) VALUES ($1,$2,$3,$4,$5)',
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
