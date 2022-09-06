const mongoose = require('mongoose');

const ListFavsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  favs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Fav',
    },
  ],
}, { timestamps: true });

const ListFavs = mongoose.model('Fav', ListFavsSchema);

module.exports = ListFavs;
