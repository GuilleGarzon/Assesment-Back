const User = require('./user.model');

function findUserByEmail(email) {
  return User.findOne({ email });
}

function createUser(user) {
  return User.create(user);
}

module.exports = {
  findUserByEmail,
  createUser,
};
