//  FIXME Utilizar destructuring ejem:
//  const { User } = require('../models/users');
const model = require('../models/users');

// FIXME Cada controlador debe ser una clase
// FIXME Todos los metodos que acceden al modelo y por lo cual son async, deben tener su async-await
// FIXME Cada metodo del controlador debe tener manejo de errores en caso de que el modelo no obtenga datos

exports.add = (req, res) => {
    const response = model.add(req.body.username, req.body.name,
        req.body.mail, req.body.password, req.body.roles, req.body.exist);
    // FIXME Cuando se crean recursos, el responseCode debe ser 201
    res.send(response);
};

exports.find = (req, res) => {
    const response = model.find(req.params.username);
    res.send(response);
};

exports.list = (req, res) => {
    const response = model.list();
    res.send(response);
};

exports.edit = (req, res) => {
    const response = model.edit(req.body.username, req.body.name,
        req.body.mail, req.body.password, req.body.roles);
    res.send(response);
};

exports.delete = (req, res) => {
    const response = model.delete(req.body.username);
    res.send(response);
};

exports.addFriend = (req, res) => {
    const response = model.addFriend(req.body.username, req.body.friend);
    res.send(response);
};

exports.findFriend = (req, res) => {
    const response = model.findFriend(req.body.username, req.body.friend);
    res.send(response);
};

exports.friendList = (req, res) => {
    const response = model.friendList(req.body.username);
    res.send(response);
};

exports.editStatusFriend = (req, res) => {
    const response = model.editStatusFriend(req.body.username, req.body.friendUsername);
    res.send(response);
};

exports.deleteFriend = (req, res) => {
    const response = model.deleteFriend(req.body.username, req.body.friendUsername);
    res.send(response);
};
