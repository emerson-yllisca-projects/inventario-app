const { Sequelize } = require('sequelize');
const logger = require('../server/logger');

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_port = process.env.DB_PORT;
const db_host = process.env.DB_HOST;
const db_dialect = process.env.DB_DIALECT;

 const db = new Sequelize(db_name , db_user , db_password, {
    host:db_host,
    port:db_port,
    dialect:db_dialect,
    logging:false
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