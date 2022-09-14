const { Router } = require('express');

const {
  getAllList,
  getSingleAllList,
  createList,
  deleteList,
} = require('./list.controller');

const router = Router();

router.get('/', getAllList);
router.get('/:listId', getSingleAllList);
router.post('/', createList);
router.delete('/:listId', deleteList);

module.exports = router;
