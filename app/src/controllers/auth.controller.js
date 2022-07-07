// Language : javascript
// Path : src\controllers\auth.controller.js
'use strict';

import { connect } from '../database/database';
import { encrypt, compare } from '../helpers/handleBcrypt';
import { tokenSign }  from '../helpers/generateToken';

// Logic for SignUp or Register of Users
export const signUp = async(req, res) => {
    const connection = await connect();
    try {
        const { username, email, password } = req.body; // Destructuring the req.body
        const passwordHash = await encrypt(password);
        const [results] = await connection.query('INSERT INTO user SET ?', { username, email, password: passwordHash }); // Inserting the data into the database
        res.status(200).json({
            message: 'User saved successfully',
            id: results.insertId
        });
    } catch (error) {
        res.status(500).json({ message: '500, Internal server error' }); // 500 Internal server error
    }
    connection.end();
};

// Logic for Login of Users
export const signIn = async(req, res) => {
    const connection = await connect();
    try {
        const { email, password } = req.body; // Destructuring the req.body
        const [rows] = await connection.query('SELECT * FROM user WHERE email = ?', [email]); // Searching for the user with the email
        const user = (rows[0])
            if(!user) {
                res.status(404).json({message: '404, User not found'}); // 404 User not found
            }
            const isValid = await compare(password, user.password);
            if(!isValid) {
                res.status(401).json({message: '401, Invalid password'}); // 401, Unauthorized
            }
            const tokenSession = await tokenSign(user);

            if(tokenSession) {
                res.status(200).json({
                    message: '200, User logged in successfully', // 200, OK    
                    user: {
                        id: user.idUser,
                        username: user.username,
                        email: user.email,
                    },
                    token: tokenSession // Token for the user
                });
            }

            if(!tokenSession) {
                res.status(401).json({message: '401, Invalid password'}); // 401, Unauthorized
            }
    } catch (error) {
        res.send(error.message);
    }
    connection.end();
};
