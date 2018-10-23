//  FIXME Utilizar destructuring ejem:
//  const { Question } = require('../models/questions');
const model = require('../models/questions');

// FIXME Cada controlador debe ser una clase
// FIXME Todos los metodos que acceden al modelo y por lo cual son async, deben tener su async-await
// FIXME Cada metodo del controlador debe tener manejo de errores en caso de que
// el modelo no obtenga datos

exports.add = (req) => {
    const response = model.add(req.body.content, req.body.opt1,
        req.body.opt2, req.body.solution, req.body.category, req.body.exist, req.body.status);
        // FIXME Cuando se crean recursos, el responseCode debe ser 201
    return response;
};

exports.find = (req) => {
    const response = model.find(req.params.idQuest);
    return response;
};

exports.list = () => {
    const response = model.list();
    return response;
};

exports.edit = (req) => {
    const response = model.edit(req.body.idQuest, req.body.content, req.body.opt1,
        req.body.opt2, req.body.solution, req.body.category, req.body.status);
    return response;
};

exports.delete = (req) => {
    const response = model.delete(req.body.idQuest);
    return response;
};
