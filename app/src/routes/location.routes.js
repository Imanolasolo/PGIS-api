// Language : javascript
// Path : src\routes\location.routes.js
'use strict';

import { Router } from "express";
import { 
    deleteLocation, 
    getLocationCount, 
    getLocation, 
    getLocations, 
    saveLocation, 
    updateLocation 
} from "../controllers/location.controller";

// Import the middleware to check if the user is authenticated
const checkAuth = require("../middleware/auth");

const router = Router(); // Create a new express Router

// Routes for the locations collection

/**
 * @swagger
 * tags:
 *  name: Locations
 *  description: Location management
 */

/**
 * @swagger
 * /locations:
 *  get:
 *   description: Use to get all the locations in the database
 *   tags: [Locations]
 */
router.get('/locations', checkAuth, getLocations);

/**
 * @swagger
 * /locations/count:
 *  get:
 *   description: Use to get the number of locations
 *   tags: [Locations]
 */
router.get('/locations/count', getLocationCount);

/**
 * @swagger
 * /locations/id:
 *  get:
 *   description: Use to get a location by id from the database
 *   tags: [Locations]
 */
router.get('/locations/:id', getLocation);

/**
 * @swagger
 * /locations:
 *  post:
 *   description: Save a new location in the database
 *   tags: [Locations]
 */
router.post('/locations', saveLocation);

/**
 * @swagger
 * /locations/id:
 *  delete:
 *   description: Delete a location by id from the database
 *   tags: [Locations]
 */
router.delete('/locations/:id', deleteLocation);

/**
 * @swagger
 * /locations/id:
 *  put:
 *   description: Update a location by id from the database
 *   tags: [Locations]
 */
router.put('/locations/:id', updateLocation);

export default router; // Export the Router
