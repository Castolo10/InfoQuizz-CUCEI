//  FIXME Utilizar destructuring ejem:
//  const { Login } = require('../models/login');
const model = require('../models/login');

// FIXME Cada controlador debe ser una clase
// FIXME Todos los metodos que acceden al modelo y por lo cual son async, deben tener su async-await
// FIXME Cada metodo del controlador debe tener manejo de errores en caso de que
// el modelo no obtenga datos

exports.auth = (req, res) => {
    const response = model.auth(req.params.username, req.params.password);
    res.send(response);
};
