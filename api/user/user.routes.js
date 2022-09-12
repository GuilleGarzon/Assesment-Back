const { Router } = require('express');
const { getUserByEmailHandler, createUserHandler } = require('./user.controller');

const router = Router();

router.get('/:email', getUserByEmailHandler);
router.post('/', createUserHandler);
module.exports = router;
