const { Router } = require('express');

const {
  getAllList,
  getSingleAllList,
  createList,
  deleteList,
} = require('./list.controller');

const { isAuthenticated } = require('../../auth/auth.service');

const router = Router();

router.get('/', isAuthenticated, getAllList);
router.get('/:listId', isAuthenticated, getSingleAllList);
router.post('/', isAuthenticated, createList);
router.delete('/:listId', isAuthenticated, deleteList);

module.exports = router;
