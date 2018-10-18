exports.mail = (req, res, next) => {
    const email = /\S+@\S+\.\S+/;
    if (!(email.test(req.body.mail))) {
        res.send('correo electronico no valido');
    } else {
        next();
    }
};

exports.username = (req, res, next) => {
    const username = /\S/;
    if (!(username.test(req.body.username))) {
        res.send('usuario no valido');
    } else {
        next();
    }
};

exports.password = (req, res, next) => {
/*
Minimo 8 caracteres
Maximo 15
Al menos una letra mayúscula
Al menos una letra minucula
Al menos un dígito
No espacios en blanco
*/
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (regex.test(req.body.password)) {
        res.send('la contraseña no cumple los requisitos');
    } else {
        next();
    }
};
