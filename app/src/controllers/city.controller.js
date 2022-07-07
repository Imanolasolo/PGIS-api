// Language : javascript
// Path : src\controllers\city.controller.js
'use strict';

import {connect} from '../database/database';
// Get the Cities model

// Get all cities
// Handle GET requests to /api/v1/cities
export const getCities = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM municipality');
    res.json(rows);
    connection.end();
};

// Count cities
// Handle GET requests to /api/v1/cities/count
export const getCityCount = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM municipality');
    res.json(rows[0]['count']);
    connection.end();
};

// Get the city by id
// Handle GET requests to /api/v1/cities/:id
export const getCity = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM municipality WHERE idCity = ?', [req.params.id]);
    if(!rows[0]) {
        res.status(404).json({message: '404, City not found'});
    }
    res.json(rows[0]);
    connection.end();
};

// Save a new city
// Handle POST requests to /api/v1/cities
export const saveCity = async(req, res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO municipality SET ?', [req.body]);
    res.json({
        message: 'City saved successfully',
        id: results.insertId
    });
    connection.end();
};

// Delete a city by id
// Handle DELETE requests to /api/v1/cities/:id
export const deleteCity = async(req, res) => {
    const connection = await connect();
    await connection.query('DELETE FROM municipality WHERE idCity = ?', [req.params.id]);
    console.log('City deleted successfully');
    res.sendStatus(204);
    connection.end();
};

// Update a city by id
// Handle PUT requests to /api/v1/cities/:id
export const updateCity = async(req, res) => {
    const connection = await connect();
    await connection.query('UPDATE municipality SET ? WHERE idCity = ?', [
        req.body, 
        req.params.id
    ]);
    console.log('City updated successfully');
    res.sendStatus(204);
    connection.end();
};
