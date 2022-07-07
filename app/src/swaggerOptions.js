// Language : javascript
// Path : src\swaggerOptions.js
'use strict';

export const options = { // Options for the swagger docs
    definition: {
        openapi: '3.0.2',
        info: {
            title: 'PGIS - API',
            version: '1.0.0',
            description: 'API documentation',
            contact: {
                name: 'IT4PROS',
                email: 'it4pros.official@gmail.com',
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Local server',
                }
            ]
        }
    },
    apis: ['./src/routes/**.js'],
};
