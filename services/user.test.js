const userService = require('./user');
const userRepository = require('../repositories/users');

jest.mock('../repositories/users');

describe('User Service', () => {
  describe('#createNewUser', () => {
    const userData = {
      username: 'doughballs',
      firstName: 'john',
      lastName: 'doe',
      email: 'johndoe@gmail.com',
      password: 'f20G4sDsi9W',
    };

    test('should throw Error if username exists', async () => {
      userRepository.hasUsername = jest.fn().mockResolvedValue(true);

      let result;

      expect(async () => {
        result = await userService.createNewUser(userData);
      }).rejects.toThrow(Error('Username in use'));
    });

    test('should run call userRepository.addUser with new username', async () => {
      userRepository.hasUsername = jest.fn().mockResolvedValue(false);

      let result;

      try {
        result = await userService.createNewUser(userData);
      } catch {}

      expect(userRepository.addUser).toHaveBeenCalledTimes(1);
    });
  });
});
