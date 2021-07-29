const { Sequelize } = require('sequelize');
const logger = require('../server/logger');

const db = new Sequelize('db_inventario' , 'root' , 'mysql_inventario2021', {
    host:'localhost',
    port:'23306',
    dialect:'mysql',
    //logging:true
});

const connect = async() => {
    try {
        await db.authenticate();
        logger.info('DB Conectada');

    } catch (error) {
            throw new Error(error);
    }
}

module.exports = {
    connect
};