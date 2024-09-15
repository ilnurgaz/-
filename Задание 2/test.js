const UserManagement = require('./app');

describe('UserManagement', () => {
  let userManagement;

  beforeEach(() => {
    userManagement = new UserManagement();
  });

  test('addUser should add a user successfully', () => {
    userManagement.addUser('Egor');
    expect(userManagement.getAllUsers()).toContain('Egor');
  });

  test('addUser should throw an error for invalid username', () => {
    expect(() => userManagement.addUser(null)).toThrow('Invalid username');
  });

  test('removeUser should remove an existing user', () => {
    userManagement.addUser('Anna');
    userManagement.removeUser('Anna');
    expect(userManagement.getAllUsers()).not.toContain('Anna');
  });

  test('removeUser should throw an error for non-existing user', () => {
    expect(() => userManagement.removeUser('Lena')).toThrow('User not found');
  });

  test('userExists should return true for an existing user', () => {
    userManagement.addUser('Pavel');
    expect(userManagement.userExists('Pavel')).toBe(true);
  });

  test('userExists should return false for a non-existing user', () => {
    expect(userManagement.userExists('Tobby')).toBe(false);
  });
});