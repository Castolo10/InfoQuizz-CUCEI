const db = require('../db');

// FIXME Cada modelo debe ser una clase
// FIXME Todos los metodos que acceden a la base de datos y por lo cual son async, deben tener su async-await
// FIXME Cada metodo del modelo debe tener manejo de errores en caso de que el manejador de la base de datos regrese un error
// FIXME Todos los metodos del modelo que no tienen aun una instancia, debe ser metodos staticos
// FIXME Antes de regresar la respuesta se debe procesar para regresar un objeto del tipo del modelo, o un arreglo de objetos, y en caso de inserciones, agregar el id que regreso la base de datos

exports.addGame = (date, player1, player2) => {
    const response = db.INSERT('game',
        'date, player1, player2',
        `'${date}','${player1}','${player2}'`,
        null,
        '*');
    return response;
};

exports.findGame = (idGame) => {
    const response = db.SELECT('game',
        '*',
        `id_game='${idGame}'`);
    return response;
};

exports.listOfGames = () => {
    const response = db.SELECT('game');
    return response;
};

exports.matchHistory = (username) => {
    const response = db.SELECT('game',
        '*',
        `player1='${username}' OR player2='${username}'`);
    return response;
};

exports.deleteGame = (idGame) => {
    const response = db.DELETE('game',
        `id_game=${idGame}`);
    return response;
};

exports.addToDetails = (idGame, idQues, resP1 = '', resP2 = '') => {
    const response = db.INSERT('questionlist',
        'id_game, id_ques, res_p1, res_p2',
        `'${idGame}', '${idQues}', '${resP1}', '${resP2}'`,
        null,
        '*');
    return response;
};

exports.findDetails = (idGame) => {
    const response = db.SELECT('questionlist',
        '*',
        `id_game='${idGame}'`);
    return response;
};

exports.listOfDetalis = () => {
    const response = db.SELECT('questionlist');
    return response;
};

exports.editDetails = (idGame, idQues, resP1, resP2) => {
    const response = db.UPDATE('questionlist',
        `res_p1='${resP1}', res_p2='${resP2}'`,
        `id_game='${idGame}' AND id_ques'${idQues}'`);
    return response;
};

exports.deleteDetails = (idGame, idQues) => {
    const response = db.DELETE('questionlist',
        `id_game='${idGame}' AND id_ques'${idQues}'`);
    return response;
};
