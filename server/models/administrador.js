const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Rol = require('./rol');
const Direccion = require('./direccion');

let Schema = mongoose.Schema;

let administradorSchema = new Schema({
    idRol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        required: [true, 'Favor de ingresar el rol del administrador']
    },
    idDireccion: {
        type: Schema.Types.ObjectId,
        ref: 'Direccion',
        required: [true, 'Favor de ingresar el id de direccion a la que pertenece']
    },
    strNombre: {
        type: String,
        required: [true, 'Por favor ingresar el nombre del usuario']
    },
    strCodigoEmpleado: {
        type: String,
        required: [true, 'Por favor ingresar el codigo de empleado'],
        unique: true

    },
    strContraseña: {
        type: String,
        required: [true, 'Por favor ingresar la contraseña']
    },
    blnEstado: {
        type: Boolean,
        default: true
    }
});

administradorSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe ser único y diferente'
});

module.exports = mongoose.model('Administrador', administradorSchema);

