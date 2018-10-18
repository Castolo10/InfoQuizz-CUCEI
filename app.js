require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //  FIXME No hay necesidad de usar CORS
const createError = require('http-errors');
const router = require('./routes');
// const { errorHandler } = require('./middlewares'); FIXME No dejar lineas comentadas

const app = express();

// cargamos middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Carga rutas en la app
app.use(cors()); //  FIXME No hay necesidad de usar CORS
app.options('*', cors()); // Incluirlo antes del resto de rutas //  FIXME No hay necesidad de usar CORS
app.use(router);

// pasamos el 404 al errorHandler
app.use((req, res, next) => {
    next(createError(404)); // FIXME El manejador de error no deberia tener aqui el codigo default
});

app.listen(3000, () => { // FIXME El puerto debe ser un valor variable tomado de env
    console.log(`Example app listening on port ${process.env.PORT}`);
});

module.exports = app; // FIXME No hay necesidad de exportar app
