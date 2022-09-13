const User = require('./user.model');

function findUserByEmail(email) {
  return User.findOne({ email });
}

function createUser(user) {
  return User.create(user);
}

function getAllUser() {
  return User.find({});
}

module.exports = {
  findUserByEmail,
  createUser,
  getAllUser,
};
