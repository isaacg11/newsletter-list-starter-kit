// MODULE IMPORTS 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());

// API
router.post('/subscribe', (req, res) => {
    
})

// SERVER CONFIG
app.listen(5000, () => {
    console.log('server running')
})