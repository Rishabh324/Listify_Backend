const express = require('express');
const app = express();
// const cors = require('cors');
const todoRouter = require('./routes/Routes');

app.use(express.json());
// app.use(cors());
app.use('/', todoRouter);

module.exports = app;