const mongoose = require('mongoose');

let UsuarioSchema = new mongoose.Schema({

    idUsuario: Number,
    nombre: String,
    telefonoUsuario: Number,
    ciudadUsuario: String,
});