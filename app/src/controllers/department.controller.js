// Language : javascript
// Path : src\controllers\department.controller.js
'use strict';

import {connect} from '../database/database';
// Get the Departments model

// Get all departments
// Handle GET requests to /api/v1/departments
export const getDepartments = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM department');
    res.json(rows);
    connection.end();
};

// Count departments
// Handle GET requests to /api/v1/departments/count
export const getDepartmentCount = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM department');
    res.json(rows[0]['count']);
    connection.end();
};

// Get the department by id
// Handle GET requests to /api/v1/departments/:id
export const getDepartment = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM department WHERE idDepartment = ?', [req.params.id]);
    if(!rows[0]) {
        res.status(404).json({message: '404, Department not found'});
    }
    res.json(rows[0]);
    connection.end();
};

// Save a new department
// Handle POST requests to /api/v1/departments
export const saveDepartment = async(req, res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO department SET ?', [req.body]);
    res.json({
        message: 'Department saved successfully',
        id: results.insertId
    });
    connection.end();
};

// Delete a department by id
// Handle DELETE requests to /api/v1/departments/:id
export const deleteDepartment = async(req, res) => {
    const connection = await connect();
    await connection.query('DELETE FROM department WHERE idDepartment = ?', [req.params.id]);
    console.log('Department deleted successfully');
    res.sendStatus(204);
    connection.end();
};

// Update a department by id
// Handle PUT requests to /api/v1/departments/:id
export const updateDepartment = async(req, res) => {
    const connection = await connect();
    await connection.query('UPDATE department SET ? WHERE idDepartment = ?', [
        req.body, 
        req.params.id
    ]);
    console.log('Department updated successfully');
    res.sendStatus(204);
    connection.end();
};
