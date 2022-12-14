const { findUserByEmail, createUser, getAllUser } = require('./user.service');

async function getUserByEmailHandler(req, res) {
  const { email } = req.params;
  try {
    const user = await findUserByEmail(email);

    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }
    console.log('Showing user', user);
    return res.json(user);
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(500).json({ error });
  }
}

async function createUserHandler(req, res) {
  const userData = req.body;
  console.log('🚀 ~ file: user.controller.js ~ line 22 ~ createUserHandler ~ userData', userData);

  try {
    const user = await createUser(userData);
    return res.status(201).json(user);
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(500).json({ error });
  }
}

async function getAllUserHandler(req, res) {
  try {
    const users = await getAllUser();
    return res.status(200).json(users);
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(500).json({ error });
  }
}

module.exports = {
  getUserByEmailHandler,
  createUserHandler,
  getAllUserHandler
};
