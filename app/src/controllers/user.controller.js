// Language : javascript
// Path : src\controllers\user.controller.js
'use strict';

import {connect} from '../database/database';
// Get the User model

// Get all Users
// Handle GET requests to /api/v1/Users
export const getUsers = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM user');
    res.json(rows);
    connection.end();
};

// Count Users
// Handle GET requests to /api/v1/Users/count
export const getUserCount = async(req, res) => {
        const connection = await connect();
        const [rows] = await connection.query('SELECT COUNT(*) AS count FROM user');
        res.json(rows[0]['count']);
        connection.end();
};

// Get the User by id
// Handle GET requests to /api/v1/Users/:id
export const getUser = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM user WHERE idUser = ?', [req.params.id]);
    if(!rows[0]) {
        res.status(404).json({message: '404, User not found'});
    }
    res.status(200).json(rows[0]);
    connection.end();
};

// Save a new User
// Handle POST requests to /api/v1/Users
export const saveUser = async(req, res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO user SET ?', [req.body]);
    res.status(200).json({
        message: 'User saved successfully',
        id: results.insertId
    });
    connection.end();
};

// Delete a User by id
// Handle DELETE requests to /api/v1/Users/:id
export const deleteUser = async(req, res) => {
    const connection = await connect();
    await connection.query('DELETE FROM user WHERE idUser = ?', [req.params.id]);
    console.log('User deleted successfully');
    res.sendStatus(204);
    connection.end();
};

// Update a User by id
// Handle PUT requests to /api/v1/Users/:id
export const updateUser = async(req, res, next) => {
    const connection = await connect();
    await connection.query('UPDATE user SET ? WHERE idUser = ?', [
        req.body, 
        req.params.id
    ]);
    console.log('User updated successfully');
    res.sendStatus(204);
    connection.end();
};