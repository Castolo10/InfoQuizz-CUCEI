const db = require('../db');

// FIXME Cada modelo debe ser una clase
// FIXME Todos los metodos que acceden a la base de datos y por lo cual son async, deben tener su async-await
// FIXME Cada metodo del modelo debe tener manejo de errores en caso de que el manejador de la base de datos regrese un error
// FIXME Todos los metodos del modelo que no tienen aun una instancia, debe ser metodos staticos
// FIXME Antes de regresar la respuesta se debe procesar para regresar un objeto del tipo del modelo, o un arreglo de objetos, y en caso de inserciones, agregar el id que regreso la base de datos

exports.add = (content, opt1, opt2, solution, category, exist = true, status = false) => {
    const response = db.INSERT('question', 'content, opt_1, opt_2, solution, category, exist, status',
        `'${content}', '${opt1}', '${opt2}', '${solution}', '${category}', '${exist}', '${status}'`);
    return response;
};

exports.find = (idQuest) => {
    const response = db.SELECT('question', '*', `id_quest='${idQuest}'`);
    return response;
};

exports.list = () => {
    const response = db.SELECT('question');
    return response;
};

exports.edit = (idQuest, content, opt1, opt2, solution, category, status) => {
    const response = db.UPDATE('question',
        `content='${content}', opt_1='${opt1}', opt_2='${opt2}', solution='${solution}', category='${category}', status='${status}', `,
        `id_quest=${idQuest}`,
        '*');
    return response;
};

exports.delete = (idQuest) => {
    const response = db.UPDATE('question', 'exist=false', `id_quest=${idQuest}`);
    return response;
};
