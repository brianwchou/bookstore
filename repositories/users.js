const { userDB } = require('../db');

function hasUsername(username) {
  return userDB.some((entry) => entry.username === username);
}

function addUser(userData) {
  userDB.push({
    id: userDB.length,
    username: userData.username,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
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
