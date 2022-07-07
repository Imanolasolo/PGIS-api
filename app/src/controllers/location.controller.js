// Language : javascript
// Path : src\controllers\location.controller.js
'use strict';

import {connect} from './../database/database';
// Get the Location model

// Get all locations
// Handle GET requests to /api/v1/locations
export const getLocations = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM georeference');
    res.json(rows);
    connection.end();
};

// Count locations
// Handle GET requests to /api/v1/locations/count
export const getLocationCount = async(req, res) => {
        const connection = await connect();
        const [rows] = await connection.query('SELECT COUNT(*) AS count FROM georeference');
        res.json(rows[0]['count']);
        connection.end();
};

// Get the location by id
// Handle GET requests to /api/v1/locations/:id
export const getLocation = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM georeference WHERE idGeoreference = ?', [req.params.id]);
    if(!rows[0]) {
        res.status(404).json({message: '404, Location not found'});
    }
    res.json(rows[0]);
    connection.end();
};

// Save a new location
// Handle POST requests to /api/v1/locations
export const saveLocation = async(req, res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO georeference SET ?', [req.body]);
    res.json({
        message: 'Location saved successfully',
        id: results.insertId
    });
    connection.end();
};

// Delete a location by id
// Handle DELETE requests to /api/v1/locations/:id
export const deleteLocation = async(req, res) => {
    const connection = await connect();
    await connection.query('DELETE FROM georeference WHERE idGeoreference = ?', [req.params.id]);
    console.log('Location deleted successfully');
    res.sendStatus(204);
    connection.end();
};

// Update a location by id
// Handle PUT requests to /api/v1/locations/:id
export const updateLocation = async(req, res, next) => {
    const connection = await connect();
    await connection.query('UPDATE georeference SET ? WHERE idGeoreference = ?', [
        req.body, 
        req.params.id
    ]);
    console.log('Location updated successfully');
    res.sendStatus(204);
    connection.end();
};