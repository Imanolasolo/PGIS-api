// Language : javascript
// Path : src\routes\department.routes.js
'use strict';

import { Router } from "express";
import { 
    deleteDepartment, 
    getDepartmentCount, 
    getDepartment, 
    getDepartments, 
    saveDepartment,  
    updateDepartment 
} from "../controllers/department.controller";

// Import the middleware to check if the user is authenticated
const checkAuth = require("../middleware/auth"); 

const router = Router(); // Create a new express Router

// Routes for the departments collection

/**
 * @swagger
 * tags:
 *  name: Departments
 *  description: Department management
 */

/**
 * @swagger
 * /departments:
 *  get:
 *   description: Use to get all the departments in the database
 *   tags: [Departments]
 */
router.get('/departments', checkAuth, getDepartments);

/**
 * @swagger
 * /departments/count:
 *  get:
 *   description: Use to get the number of departments
 *   tags: [Departments]
 */
router.get('/departments/count', getDepartmentCount);

/**
 * @swagger
 * /departments/id:
 *  get:
 *   description: Use to get a department by id from the database
 *   tags: [Departments]
 */
router.get('/departments/:id', getDepartment);

/**
 * @swagger
 * /departments:
 *  post:
 *   description: Save a new department in the database
 *   tags: [Departments]
 */
router.post('/departments', saveDepartment);

/**
 * @swagger
 * /departments/id:
 *  delete:
 *   description: Use to delete a department from the database
 *   tags: [Departments]
 */
router.delete('/departments/:id', deleteDepartment);

/**
 * @swagger
 * /departments/id:
 *  put:
 *   description: Update a department by id from the database
 *   tags: [Departments] 
 */
router.put('/departments/:id', updateDepartment);

export default router; // Export the Router
