const express = require('express');
//  FIXME Utilizar destructuring ejem:
//  const { questionCtrl } = require('../controllers/categories');
const controller = require('../controllers/questions');

const router = express.Router();

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide todo el cuerpo del request
router.post('/', (req, res) => {
    const response = controller.add(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide que :idQuest es un identificador con el
// formato definido, ejem: es un numero en cierto rango
router.get('/:idQuest', (req, res) => {
    const response = controller.find(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
router.get('/', (req, res) => {
    const response = controller.list(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide todo el cuerpo del request
// FIXME Para editar un recurso, en la ruta en los params se debe indicar el
// identificador del recurso
router.put('/', (req, res) => {
    const response = controller.edit(req, res);
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
    const response = controller.delete(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

module.exports = router;
