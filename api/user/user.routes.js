const { Router } = require('express');
const { getUserByEmailHandler, createUserHandler, getAllUserHandler } = require('./user.controller');
const { registerLogin } = require('./user.joiSchema');

const router = Router();

/**
 * @openapi
 * /api/users/{email}:
 *  get:
 *    tags:
 *    - Users
 *    description: Get a single user
 *    summary: Get a single user Summary
 *    parameters:
 *    - in: path
 *      name: email
 *      description: The email of the user to get
 *      required: true
 *    responses:
 *     200:
 *      description: A single user by email
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/userResponse'
 *     404:
 *      description: User not found
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/userNotFound'
 *     500:
 *      description: Internal server error
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/serverError'
 */
router.get('/:email', getUserByEmailHandler);

/**
 * @openapi
 * /api/users:
 *  post:
 *   tags:
 *   - Users
 *   description: Create a new user
 *   summary: Create a new user Summary
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties: *
 *        email:
 *         type: string
 *         example: jd@exmaple.com
 *        password:
 *         type: string
 *         example: 123456
 *       required:
 *       - email
 *       - password
 *   responses:
 *     201:
 *      description: A single user
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/userResponse' *
 *     500:
 *      description: Internal server error
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/serverError'
 */
router.post('/', registerLogin, createUserHandler);

/**
 * @openapi
 * /api/users:
 *  get:
 *   tags:
 *   - Users
 *   description: Get all users
 *   responses:
 *     200:
 *      description: An array of users
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 */
router.get('/', getAllUserHandler);

module.exports = router;
