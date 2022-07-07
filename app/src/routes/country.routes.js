// Language : javascript
// Path : src\routes\country.routes.js
'use strict';

import { Router } from "express";
import { 
    deleteCountry, 
    getCountryCount, 
    getCountry, 
    getCountries, 
    saveCountry,  
    updateCountry 
} from "../controllers/country.controller";

// Import the middleware to check if the user is authenticated
const checkAuth = require("../middleware/auth"); 

const router = Router(); // Create a new express Router

// Routes for the countries collection

/**
 * @swagger
 * tags:
 *  name: Countries
 *  description: Country management
 */

/**
 * @swagger
 * /countries:
 *  get:
 *   description: Use to get all the countries in the database
 *   tags: [Countries]
 */
router.get('/countries', checkAuth, getCountries);

/**
 * @swagger
 * /countries/count:
 *  get:
 *   description: Use to get the number of countries
 *   tags: [Countries]
 */
router.get('/countries/count', getCountryCount);

/**
 * @swagger
 * /countries/id:
 *  get:
 *   description: Use to get a country by id from the database
 *   tags: [Countries]
 */
router.get('/countries/:id', getCountry);

/**
 * @swagger
 * /countries:
 *  post:
 *   description: Save a new country in the database
 *   tags: [Countries]
 */
router.post('/countries', saveCountry);

/**
 * @swagger
 * /countries/id:
 *  delete:
 *   description: Use to delete a country from the database
 *   tags: [Countries]
 */
router.delete('/countries/:id', deleteCountry);

/**
 * @swagger
 * /countries/id:
 *  put:
 *   description: Use to update a country from the database
 *   tags: [Countries]
 */
router.put('/countries/:id', updateCountry);

export default router; // Export the router
