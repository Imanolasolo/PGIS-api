// Language : javascript
// Path: src\controllers\upload.controller.js
// 'use strict';

// import {connect} from './../database/database';
// const fs = require('fs');
// const csv = require('fast-csv');


// // upload data from a csv file
// // Handle POST requests to /api/v1/upload
// export const upload = async(req, res) => {
//     const connection = await connect();
//     const [results] = await connection.query('INSERT INTO XXXXXXXXX SET ?', [req.body]);
//     res.json({
//         message: 'Successful data upload',
//         id: results.insertId
//     });
//     connection.end();
// };