// Language : javascript
// Path : src\middleware\auth.js
'use strict';

// Main dependencies for the API
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";


//Create express app
const app = express();


// Settings for the app
app.set("port", 3000); // Port to listen


// Section for control routes collection
import authRoutes from './routes/auth.routes';
import citiesRoutes from './routes/city.routes';
import countriesRoutes from './routes/country.routes';
import departmentsRoutes from './routes/department.routes';
import locationsRoutes from './routes/location.routes';
import petitionersRoutes from './routes/petitioner.routes';
import servicesRoutes from './routes/service.routes';
import usersRoutes from './routes/user.routes';


// Section for control leaflet routes collection
import leafletsRoutes from './routes/leaflet.routes';

//Import routes for the uploads files
import uploadsRoutes from './routes/upload.routes'; // Working in progress


// Middlewares for the app
app.use(cors()); // Allow all requests from all domains
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false })); // Parse the body of the request
app.use(bodyParser.json());


//CORS settings for the app
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


// Build documentation for the API
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swaggerOptions";
const specs = swaggerJSDoc(options);

// Routes which should handle requests
app.use('/api/v1/', authRoutes);
app.use('/api/v1/', citiesRoutes);
app.use('/api/v1/', countriesRoutes);
app.use('/api/v1/', departmentsRoutes);
app.use('/api/v1/', locationsRoutes);
app.use('/api/v1/', petitionersRoutes);
app.use('/api/v1/', servicesRoutes);
app.use('/api/v1/', usersRoutes);

// Routes which should handle leaflets requests
app.use('/api/v1/', leafletsRoutes);

//Main Error Handling Middleware for the API
app.use((req, res, next) => {
    const error = new Error('404, Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// Implementing the swagger docs for the API
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));


export default app;