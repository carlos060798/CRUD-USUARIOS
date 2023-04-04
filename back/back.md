# 1 se inicialza el protyecto
npm init

# 2 se instala express 
npm install express 

# 3 se instala nodemon para refresacr los eventos del servidor
npm install -g nodemon
para correr nodemon se cambia en el pagckage .json 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve": "nodemon server.js"
  },

se corre servidor con 
npm run serve
# 4 se configura el servidor basico en server.js 
const express= require('express') 

const app = express() 

// servidor basico configuracion 
app.get('/', (req, res) =>{
    res.end("bienvenidos al servidor")
})
 app.listen(5000,function(){
    console.log('Servidor node en linea');
 })

# se intala moogose para poder trabajar con una base de datos
npm install mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/clientes');

const objetbd=mongoose.connection

objetbd.on('conectado',()=>{
    console.log('conexion exitosa')
})
objetbd.on('error',()=>{
    console.log('error conexion exitosa')
}) 

module.exports =mongoose 

# se llama  trata de realizar la cinexion con la base datos desde el server.js 
const archivobd=require('./conexion')  

# se crean las rutas y modelo de datos para  comunciar las operaciones con la base de datos  en rutas/usuarios.js  
const express= require('express');
const roouter=  express.Router();

const mongoose = require('mongoose');
const  eschema=  mongoose.Schemas

const eschemausuario = new eschema({
nombre: String,
correo:String,
telefono:String,
idusuario:String


}) 

const modelousuario=mongoose.Model("usuarios",eschema)  

# se crea la primera ruta de ejemplo con  en usuario.js

const roouter=  express.Router();

module.exports=roouter

roouter.post("/agregar",(req,res)=>{
    const nuevousuarios = new Modelousuario({
        nombre:req.body.nombre,
        email:req.body.email,
        telefono:req.body.telefono,
        usuario:req.body.usuario
    }
    ) 
    nuevousuarios.save()
.then(result => {
    res.send('usuario agregado correctamente');
})
.catch(error => {
    res.send(error);
});
})



-- se porta  al server con la ruta opcional
//importacuion de modelo y usuario

const rutasusuario=require('./rutas/usuario') 
app.use('/api/usuario', rutasusuario)  


# se  importa en el server.js  el bodyparse para poder obtener los valores del formulario
//requeirimiento de la  extendicon bodyparse
const bodyparse=require('body-parser')
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended:"true"}))  

# se crea la ruta para listar los elementos en el usuario.js 
roouter.get("/obtenerusuario",(req,res)=>{

   Modelousuario.find().then(docs => {
    res.send(docs);
}).catch(error => {
    res.send(error);
});



})
    
# se crea la ruta de actulizar los datos en la base de datos
roouter.post("/actulizausuario", (req, res) => {

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

# Se crea el metodo de eliminar usuarios
roouter.post("/borraruser", (req, res) => {
  Modelousuario.findOneAndDelete({ idusuario:req.body.idusuario}).then(()=> {res.send("usuario eliminado correctamente");
  }).catch((error) => { res.send(console.log(error))})});

