// Modulos internos

const express = require("express");
const router = express.Router();

const { Mascota } = require("../model/mascota");
const { Usuario } = require ("../model/usuario");


const autenticacion = require("../middleware/autenticacion");

// Ruta 

router.post("/", autenticacion, async(req, res) =>{

    // Definimos el id del usuario que se valido
    const usuario = await Usuario.findById(req.usuario._id); 

    //En caso de que no exista el usuario
    if (!usuario) return rest.status(400).send("El usuario no existe en la BD");

    // Si el usuario existe insertamos la mascota con su id

    const mascota = new Mascota({
    
    idUsuario: usuario._id,
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion,
    });

    // Enviamos el objeto

    const result = await mascota.save();
    res.status(200).send(result);

});

//exports 

module.exports = router;
