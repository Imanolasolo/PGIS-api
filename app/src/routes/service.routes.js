// Language : javascript
// Path : src\routes\service.routes.js
'use strict';

import { Router } from "express";
import { 
    deleteService, 
    getServiceCount, 
    getService, 
    getServices, 
    saveService,  
    updateService 
} from "../controllers/service.controller";

// Import the middleware to check if the user is authenticated
const checkAuth = require("../middleware/auth"); 

const router = Router(); // Create a new express Router

// Routes for the services collection

/**
 * @swagger
 * tags:
 *  name: Services
 *  description: Services management
 */

/**
 * @swagger
 * /services:
 *  get:
 *   description: Use to get all the services in the database
 *   tags: [Services]
 */
router.get('/services', checkAuth, getServices);

/**
 * @swagger
 * /services/count:
 *  get:
 *   description: Use to get the number of services
 *   tags: [Services]
 */
router.get('/services/count', getServiceCount);

/**
 * @swagger
 * /services/id:
 *  get:
 *   description: Use to get a service by id from the database
 *   tags: [Services]
 */
router.get('/services/:id', getService);

/**
 * @swagger
 * /services:
 *  post:
 *   description: Save a new service in the database
 *   tags: [Services]
 */
router.post('/services', saveService);

/**
 * @swagger
 * /services/id:
 *  delete:
 *   description: Delete a service from the database
 *   tags: [Services]
 */
router.delete('/services/:id', deleteService);

/**
 * @swagger
 * /services/id:
 *  put:
 *   description: Update a service by id from the database
 *   tags: [Services]
 */
router.put('/services/:id', updateService);

export default router; // Export the Router
