// Import the express module
const express = require('express');
const mongoose = require('mongoose')
const USER = require('./models/user')

// Create an Express application
const app = express();

// Define a route that sends "Hello, World!" as the response
app.get('/api', (req, res) => {
  res.send('Hello, World!');
});

// Set the app to listen on port 3000
const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
