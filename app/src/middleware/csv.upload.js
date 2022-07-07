// Language : javascript
// Path: src\middleware\csv.upload.js
// 'use strict';

// const multer = require('multer');

// // multer handling files upload and filtering
// const csvFilter = (req, file, cb) => {
//     if (!file.originalname.match(/\.(csv)$/)) {
//         return cb(new Error('Only CSV files are allowed'), false);
//     }
//     cb(null, true);
// };

// const storage = multer.diskStorage({ // multer configuration for storage of the files
//     destination: (req, file, cb) => {
//         cb(null, '../resources/assets/uploads/'); // the path where the files will be stored
//     },
//     filename: (req, file, cb) => {
//         console.log(file.originalname);
//         cb(null, `${Date.now()}-IT4PROS-${file.originalname}`); // the final name of the file
//     },
// });

// const uploadFile = multer({ storage: storage, fileFilter: csvFilter }); // multer configuration for the files upload

// module.exports = uploadFile; // export the multer configuration for the files upload