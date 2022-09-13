const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string()
    .email(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{5,15}$/)
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
    .email(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{5,15}$/)
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
