const { findUserByEmail } = require('../../api/user/user.service');
const { signToken } = require('../auth.service');

async function loginUserHandler(req, res) {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'User or password not found' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'User or Password not' });
    }

    const token = signToken({ email: user.email });
    return res.status(200).json({ token, email });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = { loginUserHandler };
