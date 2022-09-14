const healthcheck = require('./api/healthcheck');
const user = require('./api/user/user.routes');
const list = require('./api/list/list.routes');
const favs = require('./api/fav/fav.routes');
const authLocal = require('./auth/local/local.routes');

const { isAuthenticated } = require('./auth/auth.service');

function routes(app) {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/users', user);
  app.use('/api/lists', isAuthenticated, list);
  app.use('/api/favs', isAuthenticated, favs)

  // auth routes
  app.use('/auth/local', authLocal);
}

module.exports = routes;
