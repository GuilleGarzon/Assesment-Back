const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
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

const List = mongoose.model('List', ListSchema);

module.exports = List;
