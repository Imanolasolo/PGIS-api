// Language : javascript
// Path : src\routes\user.routes.js
'use strict';

import { Router } from "express";
import { 
    deleteUser, 
    getUserCount, 
    getUser, 
    getUsers, 
    saveUser, 
    updateUser 
} from "../controllers/user.controller";

// Import the middleware to check if the user is authenticated
const checkAuth = require("../middleware/auth"); 

const router = Router(); // Create a new express Router

// Routes for the Users collection

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: User management
 */

/**
 * @swagger
 * /users:
 *  get:
 *   description: Use to get all the Users in the database
 *   tags: [users]
 */
router.get('/users', checkAuth, getUsers);

/**
 * @swagger
 * /users/count:
 *  get:
 *   description: Use to get the number of Users
 *   tags: [users]
 */
router.get('/users/count', getUserCount);

/**
 * @swagger
 * /users/id:
 *  get:
 *   description: Use to get a User by id from the database
 *   tags: [users]
 */
router.get('/users/:id', getUser);

/**
 * @swagger
 * /users:
 *  post:
 *   description: Save a new User in the database
 *   tags: [users]
 */
router.post('/users', saveUser);

/**
 * @swagger
 * /users/id:
 *  delete:
 *   description: Delete a User by id from the database
 *   tags: [users]
 */
router.delete('/users/:id', deleteUser);

/**
 * @swagger
 * /users/id:
 *  put:
 *   description: Update a User by id from the database
 *   tags: [users]
 */
router.put('/users/:id', updateUser);

export default router; // Export the Router
