const healthcheck = require('./api/healthcheck');
const user = require('./api/user/user.routes');
const fav = require('./api/fav/fav.routes');
const list = require('./api/list/list.routes');
const authLocal = require('./auth/local/local.routes');

function routes(app) {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/users', user);
  app.use('/api/favs', fav);
  app.use('/api/lists', list);

  // auth routes
  app.use('/auth/local', authLocal);
}

module.exports = routes;
