// Language : javascript
// Path : src\routes\leaflet.routes.js
'use strict';

import { Router } from "express";
import {  
    getLeaflet, 
    getLeaflets
} from "../controllers/leaflet.controller";

// Import the middleware to check if the user is authenticated
const checkAuth = require("../middleware/auth");

const router = Router(); // Create a new express Router

// Leaflet routes collection

/**
 * @swagger
 * tags:
 *  name: Leaflet routes collection
 *  description: Leaflet routes management
 */

/**
 * @swagger
 * /leaflets:
 *  get:
 *   description: Use to get all the HSP information
 *   tags: [Leaflets]
 */
router.get('/leaflets', checkAuth, getLeaflets);

/**
 * @swagger
 * /leaflets/id:
 *  get:
 *   description: Use to get a HSP information by id
 *   tags: [Leaflets]
 */
router.get('/leaflets/:id', getLeaflet);

export default router; // Export the Router
