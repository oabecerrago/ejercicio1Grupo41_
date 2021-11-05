const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexion a base de datos

mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.4nucx.mongodb.net/ejegrupo41db?retryWrites=true&w=majority");

//operaciones crud

app.use(route);
app.listen(3000, ()=>{
    console.log("Servicio corriendo en el puerto 3000")
});