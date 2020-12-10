//Modulos internos

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Definir esquema de la collection en mongo (Usuarios)

const esquemaUsuario = new mongoose.Schema({
    nombre: String,
    correo: String,
    pass: String
});

//Sistema de Autenticacion (Generar el jsonwebtoken)

esquemaUsuario.methods.generateJWT = function() {
    return jwt.sign({
        _id: this.id,
        nombre: this.nombre,
        correo: this.correo,   
    },"clave")
}

// crear exports

const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;
