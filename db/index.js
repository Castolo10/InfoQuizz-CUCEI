const { Client } = require('pg');

// const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
// FIXME Falta manejo de errores para los casos en que las conexiones fallen

const connectionString = 'postgres://postgres:admin@localhost/CiberQuizz';
// const connectionString = 'postgres://chzvqhovtoywzc:bcbac62e65167d66c203c9ed750b8220bdf3497d21e3d3efafb11b4788e9ab60@ec2-54-221-225-11.compute-1.amazonaws.com/dbhd5eod9kf1cp';
const client = new Client(connectionString);

// FIXME TODOS los metodos deben tener su manejo de errores

client.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Database Started');
    }
});

exports.INSERT = async (tableName, columns, values, contition = null, returning = null) => {
    let sql = '';
    sql += `INSERT INTO ${tableName} (${columns})`;
    sql += ` VALUES (${values})`;
    if (contition !== null) {
        sql += ` WHERE ${contition}`;
    }
    if (returning !== null) {
        sql += ` RETURNING ${returning}`;
    }
    console.log(sql);
    const resp = await client.query(sql);
    return resp;
};

exports.SELECT = async (tableName, columns = '*', condition = null) => {
    let sql = '';
    sql += `SELECT ${columns}`;
    sql += ` FROM ${tableName}`;
    if (condition !== null) {
        sql += ` WHERE ${condition}`;
    }
    console.log(sql);
    const resp = await client.query(sql);
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
    console.log(sql);
    const { rows } = await client.query(sql);
    return rows;
};

exports.DELETE = async (tableName, condition) => {
    let sql = '';
    sql += `DELETE FROM ${tableName}`;
    sql += ` WHERE ${condition}`;
    console.log(sql);
    const { rows } = await client.query(sql);
    return rows;
};

exports.NOW = async () => {
    const sql = 'SELECT NOW()';
    console.log(sql);
    const { rows } = await client.query(sql);
    return rows;
};
