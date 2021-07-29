const express = require('express');
const cors = require('cors');
const routes = require('../../src/routes/index.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api-inventario', routes)

module.exports = app;