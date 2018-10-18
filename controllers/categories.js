//  FIXME Utilizar destructuring ejem:
//  const { Category } = require('../models/categories');
const model = require('../models/categories');

// FIXME Cada controlador debe ser una clase
// FIXME Todos los metodos que acceden al modelo y por lo cual son async, deben tener su async-await
// FIXME Cada metodo del controlador debe tener manejo de errores en caso de que el modelo no obtenga datos

exports.add = (req, res) => {
    const response = model.add(req.body.category, req.body.content);
    // FIXME Cuando se crean recursos, el responseCode debe ser 201
    res.send(response);
};

exports.find = (req, res) => {
    const response = model.find(req.params.category);
    res.send(response);
};

exports.list = (req, res) => {
    const response = model.list();
    res.send(response);
};

exports.edit = (req, res) => {
    const response = model.edit(req.body.category, req.body.content);
    res.send(response);
};
