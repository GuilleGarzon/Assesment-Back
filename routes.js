const healthcheck = require('./api/healthcheck');
// const user = require('./api/user/user.routes');

function routes(app) {
  app.use('/api/healthcheck', healthcheck);
  // app.use('/api/users', user);
}

module.exports = routes;
