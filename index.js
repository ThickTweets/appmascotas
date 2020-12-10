//Modulos internos

const express = require("express");
const mongoose = require("mongoose");

//Modulo de rutas creadas

const usuario = require("./route/usuario")
const autenticacion = require("./route/autenticacion")
const mascota =require("./route/mascota")

//App

const app = express();
app.use(express.json());

//Definir la ruta para el modulo usuarios

app.use("/api/usuario",usuario);
app.use("/api/autenticacion",autenticacion);
app.use("/api/mascota",mascota);

//puertos de conexion y ejecucion

const port = process.env.PORT || 3002;
app.listen(port,() => console.log("Se esta ejecutando",port));

//registro en mongo

mongoose.connect("mongodb://localhost/mascotas",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

.then(() => console.log("Conectado con Mongo"))
.catch(() => console.log("Error al conectar con la base de datos "))
