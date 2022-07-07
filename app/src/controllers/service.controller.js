// Language : javascript
// Path : src\controllers\service.controller.js
'use strict';

import {connect} from '../database/database';
// Get the Services model

// Get all services
// Handle GET requests to /api/v1/services
export const getServices = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM service');
    res.json(rows);
    connection.end();
};

// Count services
// Handle GET requests to /api/v1/services/count
export const getServiceCount = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM service');
    res.json(rows[0]['count']);
    connection.end();
};

// Get the service by id
// Handle GET requests to /api/v1/services/:id
export const getService = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM service WHERE idService = ?', [req.params.id]);
    if(!rows[0]) {
        res.status(404).json({message: '404, Service not found'});
    }
    res.json(rows[0]);
    connection.end();
};

// Save a new service
// Handle POST requests to /api/v1/services
export const saveService = async(req, res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO service SET ?', [req.body]);
    res.json({
        message: 'Service saved successfully',
        id: results.insertId
    });
    connection.end();
};

// Delete a service by id
// Handle DELETE requests to /api/v1/services/:id
export const deleteService = async(req, res) => {
    const connection = await connect();
    await connection.query('DELETE FROM service WHERE idService = ?', [req.params.id]);
    console.log('Service deleted successfully');
    res.sendStatus(204);
    connection.end();
};

// Update a service by id
// Handle PUT requests to /api/v1/services/:id
export const updateService = async(req, res) => {
    const connection = await connect();
    await connection.query('UPDATE service SET ? WHERE idService = ?', [
        req.body, 
        req.params.id
    ]);
    console.log('Service updated successfully');
    res.sendStatus(204);
    connection.end();
};
