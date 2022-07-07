// Language : javascript
// Path : src\routes\city.routes.js
'use strict';

import { Router } from "express";
import { 
    deleteCity, 
    getCityCount, 
    getCity, 
    getCities, 
    saveCity,  
    updateCity 
} from "../controllers/city.controller";

// Import the middleware to check if the user is authenticated
const checkAuth = require("../middleware/auth"); 

const router = Router(); // Create a new express Router

// Routes for the cities collection

/**
 * @swagger
 * tags:
 *  name: Cities
 *  description: City management
 */

/**
 * @swagger
 * /cities:
 *  get:
 *   description: Use to get all the cities in the database
 *   tags: [Cities]
 */
router.get('/cities', checkAuth, getCities);

/**
 * @swagger
 * /cities/count:
 *  get:
 *   description: Use to get the number of cities
 *   tags: [Cities]
 */
router.get('/cities/count', getCityCount);

/**
 * @swagger
 * /cities/id:
 *  get:
 *   description: Use to get a city by id from the database
 *   tags: [Cities]
 */
router.get('/cities/:id', getCity);

/**
 * @swagger
 * /cities:
 *  post:
 *   description: Save a new city in the database
 *   tags: [Cities]
 */
router.post('/cities', saveCity);

/**
 * @swagger
 * /cities/id:
 *  delete:
 *   description: Use to delete a city from the database
 *   tags: [Cities]
 */
router.delete('/cities/:id', deleteCity);

/**
 * @swagger
 * /cities/id:
 *  put:
 *   description: Use to update a city from the database
 *   tags: [Cities]
 */
router.put('/cities/:id', updateCity);

export default router; // Export the router
