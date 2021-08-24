const express = require('express');
const cors = require('cors');
const routes = require('../../src/routes/index.routes');
const morgan = require('morgan');
const fileUpload = require('express-fileupload')

const app = express();
      app.use(cors())
         .use(express.json())
         .use(morgan('tiny'))
         .use(fileUpload({
             useTempFiles : true,
             tempFileDir : '/tmp/',
             createParentPath:true
            }))
         .use('/api-inventario', routes)
         
module.exports = app;