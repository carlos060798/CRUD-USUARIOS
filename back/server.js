const express= require('express') 

const app = express() 

// se establece conexion

const archivobd=require('./conexion')

//importacuion de modelo y usuario

const rutasusuario=require('./rutas/usuario') 
//requeirimiento de la  extendicon bodyparse
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:"true"}))


app.use('/api/usuario', rutasusuario)



// servidor basico configuracion 
app.get('/', (req, res) =>{
    res.end("bienvenidos al servidor")
})
 app.listen(5000,function(){
    console.log('Servidor node en linea');
 })