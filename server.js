// MODULE IMPORTS 
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());

// API
app.post('/subscribe', (req, res) => {

})

// SERVER CONFIG
app.listen(5000, () => {
    console.log('server running')
})
