// Language : javascript
// Path : src\routes\auth.routes.js
'use strict';

import { Router } from 'express';
import * as authControl from "../controllers/auth.controller"; // Import the controller

const router = Router(); // Create a new express Router

router.post('/auth/signUp', authControl.signUp); // Route for signUp

router.post('/auth/signIn', authControl.signIn); // Route for signIn

export default router; // Export the router