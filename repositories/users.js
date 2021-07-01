const db = require('../db');

async function hasUsername(username) {
  return db
    .query('SELECT 1 FROM users WHERE username=$1', [username])
    .then((res) => {
      return res.rows.length >= 1;
    });
}

async function hasEmail(email) {
  return db
    .query('SELECT 1 FROM users WHERE email=$1', [email])
    .then(res => {
    return res.rows.length >= 1;
  });
}

async function addUser({ username, firstName, lastName, email, hash, salt}) {
  return db.query(
    'INSERT INTO users(username, firstname, lastname, email, password_hash, salt) VALUES ($1, $2, $3, $4, $5, $6)',
    [username, firstName, lastName, email, hash, salt]
  );
}

async function getById(id) {
  return db.query('SELECT * FROM users WHERE id=$1', [id]).then((res) => {
    return res.rows[0];
  });
}

async function findOne(username) {
  return db.query('SELECT * FROM users WHERE username=$1 LIMIT 1', [username]).then((res) => {
    return res.rows[0];
  });
}

module.exports = {
  hasUsername,
  hasEmail,
  addUser,
  getById,
  findOne,
};
