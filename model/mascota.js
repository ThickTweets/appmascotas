// Modelos internos

const mongoose = require("mongoose");
// const jwt =  require("jsonwebtoken");

const esquemaMascota = new mongoose.Schema({

    idUsuario: String,
    nombre: String,
    tipo: String,
    descripcion: String,
    });

// Exports

const Mascota = mongoose.model("mascota", esquemaMascota);
module.exports.Mascota = Mascota; 
