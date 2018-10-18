const express = require('express');

//  FIXME Utilizar destructuring ejem:
//  const { categoriesCtrl } = require('../controllers/categories');
const controller = require('../controllers/categories');

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
// FIXME Falta un middleware que valide que :category es un identificador con el
// formato definido, ejem: es un numero en cierto rango
router.get('/:category', (req, res) => {
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
router.put('/', (req, res) => {
    const response = controller.edit(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

module.exports = router;
