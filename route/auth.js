// Referenciamos los modulos internos de node

const express = require("express");
const router = express.Router();

// Modulos internos

const {Usuario} = require("../model/usuario");

//Ruta 
router.post("/", async(req,res) => {

    const usuario = await Usuario.findOne({correo: req.body.correo});

    //Si no existe el correo
    if(!usuario) return res.status(400).send("Usuario o contraseña invalida");

    if(usuario.pass !== req.body.pass) return res.status(400).send("Usuario o contraseña invalida");

    // Generar un JWT
    const jwtToken = usuario.generateJWT();
    res.status(200).send({jwtToken});

})

// Exportar modulos

module.exports = router;
