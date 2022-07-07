// Language : javascript
// Path : src\database\database.js
'use strict';

import mysql from 'mysql2/promise';
import { config } from "./../config";

//Middleware to connect to database
export const connect = async () => { // Connect to the database with the parameters from the config file
    return await mysql.createConnection(config)
};

console.log("Connected to database"); // Log to console if connected to database