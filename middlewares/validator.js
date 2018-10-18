const regex = {
    usuario: /^[a-z0-9_-]{3,16}$/,
    contrasena: /^[a-zA-Z0-9_-]{6,18}$/,
    correo: /\S+@\S+\.\S+/,
    nombre: /^[a-zA-Z0-9., ]{3,40}$/,
    nombreCompleto: /^[a-zA-Z0-9., ]{3,80}$/,
    nombres: /^[a-zA-Z0-9,. ]{3,200}$/,
    numero: /^[0-9]{1,20}$/,
};

const regexErrors = {
    usuario: 'El nombre usuario puede tener solo letras y numeros (3, 16).',
    contrasena: 'La contraseña puede tener solo letras y numeros (6, 18).',
    correo: 'El formato del correo es invalido.',
    nombre: 'El campo debe tener entre 3 y 40 letras.',
    nombreCompleto: 'El campo debe tener entre 3 y 80 letras.',
    nombres: 'El campo debe tener entre 3 y 200 letras.',
    numero: 'Formato de numero incorrecto.',
};

function error(element, errorMsg) {
    const html = `<p class="error text-danger">${errorMsg}</p>`;
    $(html).insertAfter(element);
}

exports.validate = (element) => {
    // Preparacion
    const dataType = element.data('type');
    const reg = new RegExp(regex[dataType]);
    const val = element.val();

    // Si es un input
    if (element.is('input')) {
        // console.log(dataType +"|"+val+": "+reg.test(val));
        if (!reg.test(val)) {
            error(element, regexErrors[dataType]);
            return 1;
        }
    } else if (element.is('select')) { // Si es un select
    // alert('select');
        if (val === '0') {
            error(element, 'Seleccione una opcion.');
            return 1;
        }
    } else if (element.is('textarea')) { // Si es un text area
    // alert('textarea');
        if (!reg.test(val)) {
            console.log(val);
            error(element, regexErrors[dataType]);
            return 1;
        }
    }
    return 0;
};

exports.requiredFields = (str, req, res, next) => {
    if (str === '') {
        res.send('campo invalido');
    } else {
        next();
    }
};

exports.isAdmin = (permissions, req, res, next) => {
    if (permissions !== true) {
        res.send('no tienes permisos!');
    }
    if (req.body.permissions === true) {
        next();
    }
};

exports.required = data => data !== undefined && data !== null && data.length;
