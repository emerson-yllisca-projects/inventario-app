const express = require('express');
const cors = require('cors');
const routes = require('../../src/routes/index.routes');
const morgan = require('morgan');

const app = express();
      app.use(cors())
         .use(express.json())
         .use(morgan('tiny'))
         .use('/api-inventario', routes);
 
module.exports = app;