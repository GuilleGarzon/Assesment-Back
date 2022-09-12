const { Router } = require('express');

const { createFav } = require('./fav.controller');
const { isAuthenticated } = require('../../auth/auth.service');

const router = Router();

router.post('/:listId', isAuthenticated, createFav);

module.exports = router;
