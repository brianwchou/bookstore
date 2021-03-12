const { userRepository } = require('../repositories');

async function findUserById(userId) {
  return userRepository.getUserRecordById(userId);
}

async function createNewUser(newUserData) {
  if (await userRepository.hasUsername(newUserData.username)) {
    throw new Error('Username in use');
  }
  userRepository.addUser(newUserData);
}

module.exports = {
  findUserById,
  createNewUser,
};
