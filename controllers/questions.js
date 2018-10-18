//  FIXME Utilizar destructuring ejem:
//  const { Question } = require('../models/questions');
const model = require('../models/questions');

// FIXME Cada controlador debe ser una clase
// FIXME Todos los metodos que acceden al modelo y por lo cual son async, deben tener su async-await
// FIXME Cada metodo del controlador debe tener manejo de errores en caso de que el modelo no obtenga datos

exports.add = (req, res) => {
    const response = model.add(req.body.content, req.body.opt1,
        req.body.opt2, req.body.solution, req.body.category, req.body.exist, req.body.status);
        // FIXME Cuando se crean recursos, el responseCode debe ser 201
    res.send(response);
};

exports.find = (req, res) => {
    const response = model.find(req.params.idQuest);
    res.send(response);
};

exports.list = (req, res) => {
    const response = model.list();
    res.send(response);
};

exports.edit = (req, res) => {
    const response = model.edit(req.body.idQuest, req.body.content, req.body.opt1,
        req.body.opt2, req.body.solution, req.body.category, req.body.status);
    res.send(response);
};

exports.delete = (req, res) => {
    const response = model.delete(req.body.idQuest);
    res.send(response);
};
