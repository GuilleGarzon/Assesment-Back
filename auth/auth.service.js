const jwt = require('jsonwebtoken');

const { findUserByEmail } = require('../api/user/user.service');

require('dotenv').config();

const { KEY } = process.env;

/**
 * Returns a jwt token signed by the app secret
 * @param {String} payload
 * @returns {String} token
 */
function signToken(payload) {
  const token = jwt.sign(
    payload, // payload
    KEY, // secret
    { expiresIn: '1h' }, // options -> expiresIn
  );
  return token;
}

/**
 * Validate JWT
 * @param {String} token
 * @returns {Object} payload
 */
async function verifyToken(token) {
  try {
    const payload = await jwt.verify(token, KEY);
    return payload;
  } catch (error) {
    return null;
  }
}

async function isAuthenticated(req, res, next) {
  const auth = req.headers?.authorization;

  if (!auth) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = auth.split(' ')[1];

  // validate token
  const decoded = await verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // add user to request
  const { email } = decoded;
  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  req.user = user;

  next();
  return true;
}

module.exports = {
  isAuthenticated,
  signToken,
  verifyToken,
};
