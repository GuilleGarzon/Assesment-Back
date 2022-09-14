const Fav = require('./fav.model');
const List = require('../list/list.model');

async function createFavHandler(req, res) {
  const { listId } = req.params;
  console.error("🚀 ~ file: fav.controller.js ~ line 6 ~ createFavHandler ~ listId", listId)
  try {
    const list = await List.findById(listId);
    if(!list) {
      return res.status(404).json({ message: 'List not found' });
    }
    const fav = await Fav.create({...req.body, list: listId});
    list.favs.push(fav);
    await list.save({ validateBeforeSave: false })
    return res.status(200).json(fav);
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(500).json({ error });
  }
}

module.exports = createFavHandler;
