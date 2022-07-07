// Language : javascript
// Path : src\config.js
'use strict';

import {config as dotenv} from 'dotenv'; // Load the .env file
dotenv();

// Configuration for connecting to the database with environment variables
export const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'test', 
};