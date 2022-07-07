// Language : javascript
// Path : src\controllers\country.controller.js
'use strict';

import {connect} from '../database/database';
// Get the Countries model

// Get all countries
// Handle GET requests to /api/v1/countries
export const getCountries = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM country');
    res.json(rows);
    connection.end();
};

// Count countries
// Handle GET requests to /api/v1/countries/count
export const getCountryCount = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM country');
    res.json(rows[0]['count']);
    connection.end();
};

// Get the country by id
// Handle GET requests to /api/v1/countries/:id
export const getCountry = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM country WHERE idCountry = ?', [req.params.id]);
    if(!rows[0]) {
        res.status(404).json({message: '404, Country not found'});
    }
    res.json(rows[0]);
    connection.end();
};

// Save a new country
// Handle POST requests to /api/v1/countries
export const saveCountry = async(req, res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO country SET ?', [req.body]);
    res.json({
        message: 'Country saved successfully',
        id: results.insertId
    });
    connection.end();
};

// Delete a country by id
// Handle DELETE requests to /api/v1/countries/:id
export const deleteCountry = async(req, res) => {
    const connection = await connect();
    await connection.query('DELETE FROM country WHERE idCountry = ?', [req.params.id]);
    console.log('Country deleted successfully');
    res.sendStatus(204);
    connection.end();
};

// Update a country by id
// Handle PUT requests to /api/v1/countries/:id
export const updateCountry = async(req, res) => {
    const connection = await connect();
    await connection.query('UPDATE country SET ? WHERE idCountry = ?', [
        req.body, 
        req.params.id
    ]);
    console.log('Country updated successfully');
    res.sendStatus(204);
    connection.end();
};
