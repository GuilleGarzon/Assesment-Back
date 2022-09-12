const List = require('./list.model');
const User = require('../user/user.model');

async function getAllList(req, res) {
  try {
    const userId = req.user;
    const lists = await List.find({ user: userId });
    return res.status(200).json({ message: 'Lists found', data: lists });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(404).json({ message: 'Lists not found' });
  }
}

async function getSingleAllList(req, res) {
  const { listId } = req.params;
  try {
    const list = await List.findById(listId);
    return res.status(200).json({ message: 'List found', data: list });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(404).json({ message: 'List not found' });
  }
}

async function createList(req, res) {
  const userId = req.user;
  try {
    const list = await List.create({ ...req.body, user: userId });
    const user = await User.findById(userId);
    user.lists.push(list);
    user.save({ validateBeforeSave: false });
    return res.status(201).json({ message: 'list created', data: list });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(400).json({ message: 'list could not be created', data: error });
  }
}

async function deleteList(req, res) {
  const { listId } = req.params;
  try {
    const list = await List.findByIdAndDelete(listId);
    return res.status(200).json({ message: 'list deleted', data: list });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(400).json({ message: 'list could not be destroyed', data: error });
  }
}

module.exports = {
  getAllList,
  getSingleAllList,
  createList,
  deleteList,
};
