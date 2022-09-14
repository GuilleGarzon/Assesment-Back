const { Router } = require('express');
const createFavHandler = require('./fav.controller');

const router = Router();

router.post('/:listId', createFavHandler);

module.exports = router;
