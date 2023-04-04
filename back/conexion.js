
// configuracion de base de base de datos
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/clientes');
//mongodb://127.0.0.1:27017/clientes
const objetbd= mongoose.connection;

// respuestas de la solicitud de conexion
objetbd.on('connected',()=>{
    console.log('conexion exitosa')
})
objetbd.on('error',()=>{
    console.log('error conexion exitosa')
}) 

module.exports =mongoose