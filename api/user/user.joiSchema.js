const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string()
    .email(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

function validateLogin(req, res, next) {
  const { email, password } = req.body;
  const payload = { email, password };
  const { error } = loginSchema.validate(payload);
  if (error) {
    console.error(error);
    return res.status(400).json({ error, message: 'missing data' });
  }
  next();
  return null;
}

const registerSchema = Joi.object({
  email: Joi.string()
    .email(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

function registerLogin(req, res, next) {
  const { email, password } = req.body;
  const payload = { email, password };
  const { error } = registerSchema.validate(payload);

  if (error) {
    console.error(error);
    return res.status(400).json(error);
  }
  next();
  return null;
}

module.exports = { validateLogin, registerLogin };
