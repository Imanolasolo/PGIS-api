// Language : javascript
// Path : src\controllers\leaflet.controller.js
'use strict';

import {connect} from '../database/database';
// Get the Leaflet Map model

// Get all leaflets information map for HSP
// Handle GET requests to /api/v1/leaflets
export const getLeaflets = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query
    ('SELECT name_hsp, cell, working_hours, latitude, longitude FROM petitioner LEFT JOIN georeference ON georeference_id = idGeoreference;');
    res.json(rows);
    connection.end();
};

// Get the leaflet information map for HSP by id
// Handle GET requests to /api/v1/leaflets/:id
export const getLeaflet = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query
    (
        'SELECT name_hsp, cell, working_hours, latitude, longitude FROM petitioner LEFT JOIN georeference ON georeference_id = idGeoreference WHERE idGeoreference ', [
            req.params.id]
            );
    if(!rows[0]) {
        res.status(404).json({message: '404, Leaflet information not found'});
    }
    res.json(rows[0]);
    connection.end();
};
