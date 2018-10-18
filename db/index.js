const promise = require('bluebird');

const options = {
    // Initialization Options
    promiseLib: promise,
};

const pgp = require('pg-promise')(options);

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_NAME}`;
// FIXME Falta manejo de errores para los casos en que las conexiones fallen
const db = pgp(connectionString);

// FIXME TODOS los metodos deben tener su manejo de errores

exports.INSERT = (tableName, columns, values, contition = null, returning = null) => {
    let sql = '';
    sql += `INSERT INTO ${tableName} (${columns})`;
    sql += ` VALUES (${values})`;
    if (contition !== null) {
        sql += ` WHERE ${contition}`;
    }
    if (returning !== null) {
        sql += ` RETURNING ${returning}`;
    }

    const resp = db.many(sql);
    return resp;
};

exports.SELECT = (tableName, columns = '*', condition = null) => {
    let sql = '';
    sql += `SELECT ${columns}`;
    sql += ` FROM ${tableName}`;
    if (condition !== null) {
        sql += ` WHERE ${condition}`;
    }
    const resp = db.many(sql);
    return resp;
};

exports.UPDATE = async (tableName, setters, condition, returning = null) => {
    let sql = '';
    sql += `UPDATE ${tableName}`;
    sql += ` SET ${setters}`;
    sql += ` WHERE ${condition}`;
    if (returning !== null) {
        sql += ` RETURNING ${returning}`;
    }
    const { rows } = await db.many(sql);
    return rows;
};

exports.DELETE = async (tableName, condition) => {
    let sql = '';
    sql += `DELETE FROM ${tableName}`;
    sql += ` WHERE ${condition}`;
    const { rows } = await db.many(sql);
    return rows;
};

exports.NOW = async () => {
    const sql = 'SELECT NOW()';
    const { rows } = await db.many(sql);
    return rows;
};
