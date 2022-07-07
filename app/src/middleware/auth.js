// Language: javascript
// Path: src\middleware\auth.js
'use strict';

import { verifyToken } from '../helpers/generateToken';

const checkAuth = async (req, res, next) => { // middleware to check if the user is logged
    try {
        if (!req.headers.authorization) { // if the user is not logged
            return res.status(401).json({
                message: 'No token provided'
            });
        }
        const token = req.headers.authorization.split(' ')[1]; // get the token from the header
        const tokenData = await verifyToken(token);
        console.log(tokenData);
        if (tokenData.id) {
            next();
        } else {
            res.status(409).json({
                message: 'Invalid token'
            });
        }
    } catch (err) {
        res.status(409).json({
            message: 'Invalid token'
        });
    }
};

module.exports = checkAuth; // export the middleware