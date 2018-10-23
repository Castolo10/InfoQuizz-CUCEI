const db = require('../db');

// FIXME Cada modelo debe ser una clase
// FIXME Todos los metodos que acceden a la base de datos y por lo cual son
// async, deben tener su async-await
// FIXME Cada metodo del modelo debe tener manejo de errores en caso de que el
// manejador de la base de datos regrese un error
// FIXME Todos los metodos del modelo que no tienen aun una instancia, debe ser
// metodos staticos
// FIXME Antes de regresar la respuesta se debe procesar para regresar un objeto
// del tipo del modelo, o un arreglo de objetos, y en caso de inserciones,
// gregar el id que regreso la base de datos


exports.add = (username, name, mail, password, roles = false, exist = false) => {
    const response = db.INSERT('users',
        'username, name, mail, password, roles, exist',
        `'${username}','${name}','${mail}','${password}','${roles}','${exist}'`,
        null,
        '*');
    return response;
};

exports.find = (username) => {
    const response = db.SELECT('users',
        '*',
        `username='${username}'`);
    return response;
};

exports.list = () => {
    const response = db.SELECT('users');
    return response;
};

exports.edit = (username, name, mail, password) => {
    const response = db.UPDATE('users',
        `name='${name}',mail='${mail}',password='${password}'`,
        `username='${username}'`,
        '*');
    return response;
};

exports.delete = (username) => {
    const response = db.UPDATE('users', 'exist=false',
        `username='${username}'`);
    return response;
};

exports.addFriend = (username, friend) => {
    const response = db.INSERT('friendlist',
        'username, friend_username, status_req',
        `'${username}','${friend}', 'false'`, null, '*');
    return response;
};

exports.findFriend = (username, friend) => {
    const response = db.SELECT('friendlist',
        'friend_username',
        `username='${username}' AND friend_username='${friend}' AND status_req=true`);
    return response;
};

exports.friendList = (username) => {
    const response = db.SELECT('friendlist',
        'friend_username',
        `username='${username}'`);
    return response;
};

exports.editStatusFriend = (username, friendUsername) => {
    const response = db.UPDATE('friendlist',
        'status_req=true',
        `username='${username}' AND friend_username='${friendUsername}'`);
    return response;
};

exports.deleteFriend = (username, friendUsername) => {
    const response = db.DELETE('friendlist',
        `username='${username}'AND friend_username='${friendUsername}'`);
    return response;
};
