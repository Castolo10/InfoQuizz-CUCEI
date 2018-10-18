const express = require('express');
//  FIXME Utilizar destructuring ejem:
//  const { playCtrl } = require('../controllers/categories');
const controller = require('../controllers/play');

const router = express.Router();

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide todo el cuerpo del request
router.post('/', (req, res) => {
    const response = controller.addGame(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide que :idGame es un identificador con el
// formato definido, ejem: es un numero en cierto rango
router.get('/:idGame', (req, res) => {
    const response = controller.findGame(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
router.get('/', (req, res) => {
    const response = controller.listOfGames(req, res);
    response.then((result) => {
      // FIXME Esta logica, ademas de tener que estar en el controlador, el
      // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide que :username es un identificador con
// el formato definido, ejem: es un numero en cierto rango
router.get('/:username/matchHistory', (req, res) => {
    const response = controller.matchHistory(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Las rutas para eliminaciones deben tener en los params el id del
// recurso a eliminar
router.delete('/', (req, res) => {
    const response = controller.deleteGame(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide todo el cuerpo del request
// FIXME No queda claro la diferencia entre addGame y addToDetails, si se estan
// agregando detalles a un recurso ya creado, la ruta no puede ser post, y debe
// tener en los params el id del recurso
router.post('/game', (req, res) => {
    const response = controller.addToDetails(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide que :idGame es un identificador con el
// formato definido, ejem: es un numero en cierto rango
router.get('/game/:idGame', (req, res) => {
    const response = controller.findDetails(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
router.get('/game', (req, res) => {
    const response = controller.listOfDetalis(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide todo el cuerpo del request
router.put('/game', (req, res) => {
    const response = controller.editDetails(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Para eliminar un recurso, en los params se debe indicar el id del
// recurso que se desea eliminar
router.delete('/', (req, res) => {
    const response = controller.deleteDetails(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

module.exports = router;
