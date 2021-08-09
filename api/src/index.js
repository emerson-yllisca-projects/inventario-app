require('dotenv').config();
const app = require('../config/server/app');
const port = process.env.PORT || 4001;
const {connect} = require('../config/database/conection');

const logger = require('../config/server/logger')

app.listen(port , () => {
    logger.info("Iniciando...");
   // connect();//Testea la conexion a la bd
    logger.info(`Servidor inicializado en el puerto ${port}` );
})