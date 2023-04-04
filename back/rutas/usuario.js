const express = require("express");
const roouter = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemausuario = new eschema({
  nombre: String,
  email: String,
  telefono: String,
  idusuario: String,
});
const Modelousuario = mongoose.model("usuarios", eschemausuario);
//rutas del backend
module.exports = roouter;
//agregar un usuario
roouter.post("/agregar", (req, res) => {
  const nuevousuarios = new Modelousuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idusuario: req.body.idusuario,
  });
  nuevousuarios
    .save()
    .then((result) => {
      res.send("usuario agregado correctamente");
    })
    .catch((error) => {
      res.send(error);
    });
});

// ruta de cargar usuarios
roouter.get("/obtener", (req, res) => {
  Modelousuario.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((error) => {
      res.send(error);
    });
});


//obtener usuarios por id
roouter.post("/editaruser", (req, res) => {
  Modelousuario.find({ idusuario: req.body.idusuario})
    .then((docs) => {
      res.send(docs);
    })
    .catch((error) => {
      res.send(error);
    });
});  

// editar usuarios
roouter.post("/actulizausuario", (req, res) => {
//metodo mapea los cambios y los actuliza en la bd
Modelousuario.findOneAndUpdate({ idusuario:req.body.idusuario},{
  nombre: req.body.nombre,
  email: req.body.email,
  telefono: req.body.telefono
}).then(()=> {
  res.send("usuario actualizado correctamente");
})
.catch((error) => {
  res.send(error);
});
});

//metodo de eliminar elemtos por id
roouter.post("/borraruser", (req, res) => {
  Modelousuario.findOneAndDelete({ idusuario:req.body.idusuario}).then(()=> {res.send("usuario eliminado correctamente");
  }).catch((error) => { res.send(console.log(error))})});