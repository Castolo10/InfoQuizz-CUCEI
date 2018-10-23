//  FIXME Utilizar destructuring ejem:
//  const { User } = require('../models/users');
const model = require('../models/users');

// FIXME Cada controlador debe ser una clase
// FIXME Todos los metodos que acceden al modelo y por lo cual son async, deben tener su async-await
// FIXME Cada metodo del controlador debe tener manejo de errores en caso de que
// el modelo no obtenga datos

exports.add = (req) => {
    const response = model.add(req.body.username, req.body.name,
        req.body.mail, req.body.password, req.body.roles, req.body.exist);
    // FIXME Cuando se crean recursos, el responseCode debe ser 201
    return response;
};

exports.find = (req) => {
    const response = model.find(req.params.username);
    return response;
};

exports.list = () => {
    const response = model.list();
    return response;
};

exports.edit = (req) => {
    const response = model.edit(req.body.username, req.body.name,
        req.body.mail, req.body.password);
    return response;
};

exports.delete = (req) => {
    const response = model.delete(req.body.username);
    return response;
};

exports.addFriend = (req) => {
    const response = model.addFriend(req.body.username, req.body.friend);
    return response;
};

exports.findFriend = (req) => {
    const response = model.findFriend(req.body.username, req.body.friend);
    return response;
};

exports.friendList = (req) => {
    const response = model.friendList(req.body.username);
    return response;
};

exports.editStatusFriend = (req) => {
    const response = model.editStatusFriend(req.body.username, req.body.friendUsername);
    return response;
};

exports.deleteFriend = (req) => {
    const response = model.deleteFriend(req.body.username, req.body.friendUsername);
    return response;
};
