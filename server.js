/*jshint esversion: 6*/

// Setup empty JS object to act as endpoint for all routes
let projectData = {};


// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port, listening);

function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get('/getData', (req, res) => {
    console.log(projectData);
    res.send(projectData);
});

// Post Route
let data = [];

app.post('/addWeather', (req, res) => {
    console.log(req.body);
    projectData = req.body;
    res.send(projectData);
});