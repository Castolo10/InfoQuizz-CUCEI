//  FIXME Utilizar destructuring ejem:
//  const { Play } = require('../models/play');
const model = require('../models/play');

// FIXME Cada controlador debe ser una clase
// FIXME Todos los metodos que acceden al modelo y por lo cual son async, deben tener su async-await
// FIXME Cada metodo del controlador debe tener manejo de errores en caso de que
// el modelo no obtenga datos


exports.addGame = (req) => {
    const response = model.addGame(req.body.date, req.body.player1, req.body.player2);
    // FIXME Cuando se crean recursos, el responseCode debe ser 201
    return response;
};

exports.findGame = (req) => {
    const response = model.findGame(req.params.idGame);
    return response;
};

exports.listOfGames = () => {
    const response = model.listOfGames();
    return response;
};

exports.matchHistory = (req) => {
    const response = model.matchHistory(req.params.username);
    return response;
};

exports.deleteGame = (req) => {
    const response = model.deleteGame(req.params.idGame);
    return response;
};

exports.addToDetails = (req) => {
    const response = model.addToDetails(req.body.idGame, req.body.idQues,
        req.body.resP1, req.body.resP2);
    return response;
};

exports.findDetails = (req) => {
    const response = model.findDetails(req.params.idGame);
    return response;
};

exports.listOfDetalis = () => {
    const response = model.listOfDetalis();
    return response;
};

exports.editDetails = (req) => {
    const response = model.editDetails(req.body.idGame, req.body.idQues,
        req.body.resP1, req.body.resP2);
    return response;
};

exports.deleteDetails = (req) => {
    const response = model.deleteDetails(req.body.idGame, req.body.idQues);
    return response;
};
