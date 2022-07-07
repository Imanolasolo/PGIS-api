// Language : javascript
// Path : src\routes\petitioner.routes.js
'use strict';

import { Router } from "express";
import { 
    deletePetitioner, 
    getPetitionerCount, 
    getPetitioner, 
    getPetitioners, 
    savePetitioner, 
    updatePetitioner 
} from "../controllers/petitioner.controller";

// Import the middleware to check if the user is authenticated
const checkAuth = require("../middleware/auth");

const router = Router(); // Create a new express Router

// Routes for the petitioners collection

/**
 * @swagger
 * tags:
 *  name: Petitioners
 *  description: Petitioner management
 */

/**
 * @swagger
 * /petitioners:
 *  get:
 *   description: Use to get all the petitioners in the database
 *   tags: [Petitioners]
 */
router.get('/petitioners', getPetitioners);

/**
 * @swagger
 * /petitioners/count:
 *  get:
 *   description: Use to get the number of petitioners
 *   tags: [Petitioners]
 */
router.get('/petitioners/count', getPetitionerCount);

/**
 * @swagger
 * /petitioners/id:
 *  get:
 *   description: Use to get a petitioner by id from the database
 *   tags: [Petitioners]
 */
router.get('/petitioners/:id', getPetitioner);

/**
 * @swagger
 * /petitioners:
 *  post:
 *   description: Save a new petitioner in the database
 *   tags: [Petitioners]
 */
router.post('/petitioners', savePetitioner);

/**
 * @swagger
 * /petitioners/id:
 *  delete:
 *   description: Delete a petitioner by id from the database
 *   tags: [Petitioners]
 */
router.delete('/petitioners/:id', deletePetitioner);

/**
 * @swagger
 * /petitioners/id:
 *  put:
 *   description: Update a petitioner by id from the database
 *   tags: [Petitioners]
 */
router.put('/petitioners/:id', updatePetitioner);

export default router; // Export the Router
