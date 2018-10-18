const express = require('express');
//  FIXME Utilizar destructuring ejem:
//  const { usersCtrl } = require('../controllers/categories');
const controller = require('../controllers/users');

const router = express.Router();

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide todo el cuerpo del request
router.post('/', (req, res) => {
    const response = controller.add(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide que :username es un identificador con el formato definido, ejem: es un numero en cierto rango
router.get('/:username', (req, res) => {
    const response = controller.find(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar resultados se debe mantener en el controlador
router.get('/', (req, res) => {
    const response = controller.list(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide todo el cuerpo del request
// FIXME Falta un middleware que valide que :username es un identificador con el formato definido, ejem: es un numero en cierto rango
router.put('/:username', (req, res) => {
    const response = controller.edit(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar resultados se debe mantener en el controlador
// FIXME Para eliminar un recurso, en los params se debe indicar el id del recurso que se desea eliminar
router.delete('/', (req, res) => {
    const response = controller.delete(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide todo el cuerpo del request
// FIXME Como definen a que usuario se le estan agregando amigos? normalmente deberia indicarse como param con el id del recurso
router.post('/friends', (req, res) => {
    const response = controller.addFriend(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide que :username es un identificador con el formato definido, ejem: es un numero en cierto rango
router.get('/friends/:username', (req, res) => {
    const response = controller.findFriend(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar resultados se debe mantener en el controlador
router.get('/friends', (req, res) => {
    const response = controller.friendList(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar resultados se debe mantener en el controlador
// FIXME Falta un middleware que valide todo el cuerpo del request
// FIXME Como definen a que usuario se le estan agregando amigos? normalmente deberia indicarse como param con el id del recurso
router.put('/friends/request', (req, res) => {
    const response = controller.editStatusFriend(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

// FIXME El enrutador no debe tener lógica, el manejo del response para enviar resultados se debe mantener en el controlador
// FIXME Para eliminar un recurso, en los params se debe indicar el id del recurso que se desea eliminar
router.delete('/friends', (req, res) => {
    const response = controller.deleteFriend(req, res);
    response.then((result) => {
      // FIXME Esta logica, ademas de tener que estar en el controlador, el manejo de rows deberia ser natural del modelo
        res.json(result.rows);
    });
});

module.exports = router;
