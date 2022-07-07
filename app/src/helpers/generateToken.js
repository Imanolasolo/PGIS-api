//Language: javascript
//Path: src\helpers\handleBcrypt.js
'use strict';

import jwt from 'jsonwebtoken';

// Create a JWT token for the user with the provided id and email (used in the login) | The token is valid for 1 hour
const tokenSign = async (user) => {
    return jwt.sign(
        {
            id: user.idUser,
            username: user.username,
            sign: user.password,
        }, 
        process.env.JWT_SECRET, 
        { 
            expiresIn: '1h',
            algorithm: 'HS256',
        }
    );
};

// Verify the token provided by the user
const verifyToken = async (token) => { 
    try {
        return jwt.verify(token, process.env.JWT_SECRET, { algorithm: 'HS256' });
    }
    catch (err) {
        return null;
    }
};

module.exports = { tokenSign, verifyToken }; // export the functions