const mongoose = require('mongoose');

const FavSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  listsFavs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List',
    required: true,
  },
}, { timestamps: true });

const Fav = mongoose.model('Fav', FavSchema);

module.exports = Fav;
