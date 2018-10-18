const db = require('../db');

// FIXME NO existe un modelo de auth, se usa el modelo de usuario

exports.auth = (username, password) => {
    const response = db.SELECT('user',
        '*',
        `username='${username}' AND password='${password}'`);
    return response;
};
