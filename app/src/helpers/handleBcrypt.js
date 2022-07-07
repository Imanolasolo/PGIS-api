//Language: javascript
//path: src\helpers\handleBcrypt.js
'use strict';

const bcrypt = require('bcrypt');

const encrypt = async (textPlain) => { // encrypt a text
    const salt = await bcrypt.genSalt(10); // generate a salt method with a 10 rounds
    const hash = await bcrypt.hash(textPlain, salt); // hash the text with the salt method
    return hash;
};

const compare = async (passwordPlain, hashPassword) => { // compare a text with a hash
    const result = await bcrypt.compare(passwordPlain, hashPassword);
    return result;
};

module.exports = { encrypt, compare }; // export the functions