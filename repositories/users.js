const { userDB } = require('../db');

function hasUsername(username) {
  return userDB.some((entry) => entry.username === username);
}

function addUser(username, firstName, lastName, email, password) {
  userDB.push({
    id: userDB.length,
    username,
    firstName,
    lastName,
    email,
    password,
  });
}

function getUserRecordById(id) {
  return userDB.find((entry) => {
    if (entry.id === id) {
      return entry;
    }
  });
}

module.exports = {
  hasUsername,
  addUser,
  getUserRecordById,
};
