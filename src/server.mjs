import express from 'express'

const express2 = require('express');

const app = express2();
const port = process.env.PORT || 8000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
