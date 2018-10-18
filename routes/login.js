const express = require('express');
//  FIXME Utilizar destructuring ejem:
//  const { loginCtrl } = require('../controllers/categories');
const controller = require('../controllers/login');

const router = express.Router();

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar
// resultados se debe mantener en el controlador
// FIXME Para hacer un login el username y password se mandan por POST y los
// valores en el body del request
router.get('/:username/:password', (req, res) => {
    const response = controller.auth(req, res);
    response.then((result) => {
        // FIXME Esta logica, ademas de tener que estar en el controlador, el
        // manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

module.exports = router;
