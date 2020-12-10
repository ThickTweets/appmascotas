// Referenciar los modulos internos node 

const jwt = require("jsonwebtoken")

// Crea nuestra funcion middleweare

function autenticacion (req, res, next) {
    
    let jwtToken = req.header("Authorization");

    /*
    Authorization 
    */

    jwtToken =  jwtToken.split(" ")[1];

    // Si no existe token
    if(!jwtToken) return res.status(400).send("No existe token para ver validar")
    
    //Si existe un jwt
    try{
        const payload = jwt.verify(jwtToken,"clave");
        req.usuario = payload;
        next();
    } catch (error) {
        res.status(400).send("Token no valido, no tiene autorizacion")
    }

}

// Hacemos los exports

module.exports = autenticacion;
