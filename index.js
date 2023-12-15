// app.js
const express = require('express');
const supertest = require('supertest');

const app = express();
app.use(express.json());

// Globally declared array to store JSON data
const jsonDataArray = [];

// Endpoint to save JSON data
app.post('/save', (req, res) => {
    const { age, name } = req.body
    if (!age || !name) {
      res.sendStatus(400)
      return
    }
  res.status(200).send({ userId:0/* ,message: 'JSON data saved successfully'  */});
});

// Endpoint to retrieve saved JSON data
app.get('/retrieve', (req, res) => {
  res.status(200).json(jsonDataArray);
});

// Export the app for testing
module.exports = app;



