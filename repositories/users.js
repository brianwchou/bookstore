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

function getUserRecord(firstName, lastName) {
  return userDB.find((entry) => {
    if (entry.firstName === firstName || entry.lastName === lastName) {
      return entry;
    }
  });
}

module.exports = {
  hasUsername,
  addUser,
  getUserRecord,
};
