const db = require('../db');

// FIXME Cada modelo debe ser una clase
// FIXME Todos los metodos que acceden a la base de datos y por lo cual son async, deben tener su async-await
// FIXME Cada metodo del modelo debe tener manejo de errores en caso de que el manejador de la base de datos regrese un error
// FIXME Todos los metodos del modelo que no tienen aun una instancia, debe ser metodos staticos

exports.add = (category, content) => {
    const response = db.INSERT('category',
        'category, content',
        `'${category}','${content}'`,
        null,
        '*');
    // FIXME Antes de regresar la respuesta se debe procesar para regresar un objeto de tipo categoria incluyendo el id que regreso la base de datos
    return response;
};

exports.find = (category) => {
    const response = db.SELECT('category',
        '*',
        `category='${category}'`);
    // FIXME Antes de regresar la respuesta se debe procesar para regresar un objeto de tipo categoria
    return response;
};

exports.list = () => {
    const response = db.SELECT('category');
    // FIXME Antes de regresar la respuesta se debe procesar para regresar un arreglo de objetos de tipo categoria
    return response;
};

exports.edit = (category, content) => {
    const response = db.UPDATE('category',
        `content='${content}'`,
        `category='${category}'`,
        '*');
    // FIXME Antes de regresar la respuesta se debe procesar para regresar un objeto de tipo categoria
    return response;
};
