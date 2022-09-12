const healthcheck = require('./api/healthcheck');
const user = require('./api/user/user.routes');
const authLocal = require('./auth/local/local.routes');

function routes(app) {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/users', user);

  // auth routes
  app.use('/auth/local', authLocal);
}

module.exports = routes;
