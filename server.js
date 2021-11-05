const express = require('express');
const mongoose = require('mongoose');
const UsuarioSchema = require("./Modelos/Usuario.js")


const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexion a base de datos

mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.4nucx.mongodb.net/ejegrupo41db?retryWrites=true&w=majority");

//operaciones crud
router.get('/', (req, res) => {
    res.send("Este es el inicio de mi primera API")
});

//insertar

router.post('/Usuario', (req, res)=> {
    let nuevoUsuario =  new UsuarioSchema({
        idUsuario: req.body.id,
        nombreUsuario: req.body.nombre,
        telefonoUsuario: req.body.telefono,
        ciudadUsuario: req.body.ciudad
    });

    nuevoUsuario.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("usuario almacenado")
    })
})

app.use(router);
app.listen(3000, ()=> {
    console.log("Servicio corriendo en el puerto 3000")
});