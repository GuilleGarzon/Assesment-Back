const { Router } = require('express');
const { getUserByEmailHandler, createUserHandler, getAllUserHandler } = require('./user.controller');
const { registerLogin } = require('./user.joiSchema');

const router = Router();

router.get('/:email', getUserByEmailHandler);
router.post('/', registerLogin, createUserHandler);
router.get('/', getAllUserHandler);
module.exports = router;
