//  FIXME Utilizar destructuring ejem:
//  const { Category } = require('../models/categories');
const model = require('../models/categories');

// FIXME Cada controlador debe ser una clase
// FIXME Todos los metodos que acceden al modelo y por lo cual son async, deben tener su async-await
// FIXME Cada metodo del controlador debe tener manejo de errores en caso de que
// el modelo no obtenga datos

exports.add = (req) => {
    const response = model.add(req.body.category, req.body.content);
    // FIXME Cuando se crean recursos, el responseCode debe ser 201
    return response;
};

exports.find = (req) => {
    const response = model.find(req.params.category);
    return response;
};

exports.list = () => {
    const response = model.list();
    return response;
};

exports.edit = (req) => {
    const response = model.edit(req.body.category, req.body.content);
    return response;
};
