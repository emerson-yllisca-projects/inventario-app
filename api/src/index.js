require('dotenv').config();
const app = require('../config/server/app');
const port = process.env.PORT || 4001;

const logger = require('../config/server/logger')

app.listen(port , () => {
    logger.info("Iniciando");
    console.log('Servidor inicializado en el puerto' + port );
})