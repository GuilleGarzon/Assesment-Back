const Fav = require('./fav.model');

function createFav() {
  return Fav.create({});
}

module.exports = {
  createFav,
};
