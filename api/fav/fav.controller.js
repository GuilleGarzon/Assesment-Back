const Fav = require('./fav.model');
const List = require('../list/list.model');

async function createFav(req, res) {
  const { listId } = req.params;
  try {
    const list = await List.findById(listId);

    if (!list) {
      throw new Error('List not found');
    }
    const fav = await Fav.create({ ...req.body, list: listId });
    list.favs.push(fav);
    await list.save({ validateBeforeSave: false });
    return res.status(201).json({ message: 'fav created', data: fav });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(400).json({ message: 'fav failed', data: error });
  }
}

module.exports = { createFav };
