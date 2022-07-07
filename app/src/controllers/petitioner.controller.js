// Language : javascript
// Path : src\controllers\petitioner.controller.js
'use strict';

import {connect} from './../database/database';
// Get the Petitioner model

// Get all petitioners
// Handle GET requests to /api/v1/petitioners
export const getPetitioners = async(req, res) => {

    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM petitioner');
    res.json(rows);
    connection.end();
};

// Count petitioners
// Handle GET requests to /api/v1/petitioners/count
export const getPetitionerCount = async(req, res) => {

        const connection = await connect();
        const [rows] = await connection.query('SELECT COUNT(*) AS count FROM petitioner');
        res.json(rows[0]['count']);
        connection.end();
};

// Get the petitioner by id
// Handle GET requests to /api/v1/petitioners/:id
export const getPetitioner = async(req, res) => {

    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM petitioner WHERE idHSP = ?', [req.params.id]);
    if(!rows[0]) {
        res.status(404).json({message: '404, Petitioner not found'});
    
    }
    res.json(rows[0]);
    connection.end();
};

// Save a new petitioner
// Handle POST requests to /api/v1/petitioners
export const savePetitioner = async(req, res) => {

    const connection = await connect();
    const [results] = await connection.query('INSERT INTO petitioner SET ?', [req.body]);
    res.json({
        message: 'Petitioner saved successfully',
        id: results.insertId
    });
    connection.end();
};

// Delete a petitioner by id
// Handle DELETE requests to /api/v1/petitioners/:id
export const deletePetitioner = async(req, res) => {

    const connection = await connect();
    await connection.query('DELETE FROM petitioner WHERE idHSP = ?', [req.params.id]);
    console.log('petitioner deleted successfully');
    res.sendStatus(204);
    connection.end();
};

// Update a petitioner by id
// Handle PUT requests to /api/v1/petitioners/:id
export const updatePetitioner = async(req, res, next) => {

    const connection = await connect();
    await connection.query('UPDATE petitioner SET ? WHERE idHSP = ?', [
        req.body, 
        req.params.id
    ]);
    console.log('Petitioner updated successfully');
    res.sendStatus(204);
    connection.end();
};