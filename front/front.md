# 1 SE CREAN LOS COMPONENTES DEL CRUD
LISTADEUSUARIOS.js
AGREGARUSUARIO.js
EDITARUSUARIO.JS
USUARIOINDIVIDUAL.JS 

# 2 SE  LISTAN LOS COMPONENTES EN APP.JS  

function App() {
  return (
    <div className="App">
       <h1>crud merc</h1>
       <Listausuarios/>
       <Agregarusuario/>
       <Editarusuario/>
    </div>
  );
}  

#  3 se creaan las rutas  de la siguiente manera en app.js  se importan  BrowserRouter Routes Route 
- se intala el router-dom desde consola por npm 
--import { BrowserRouter, Routes, Route } from "react-router-dom";

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listausuarios />} exact></Route>
          <Route path="/agregar" element={<Agregarusuario />} exact></Route>
          <Route path="/editar" element={<Editarusuario />} exact></Route>
        </Routes>
      </BrowserRouter> 

# SE IMPORTAN LOS ESTILOS DE BOOSTRAP EN EL INDEX.HTML DE PUBLIC  

# se trabajan los hooks en agregar usuario 
import React, { useState } from "react";

const [nombre,setnombre]=useState('')
const [email,setemail]=useState('')
const [telefono,settelefono]=useState('') 

-- luego se le asigna el valor de los  hooks a cada  imput y se crea una funcion callbalck para poder ver los cambios que sufran
value={nombre} onChange={(e)=>{
              setnombre(e.target.value);
            }} 

# se instala la dependencia uniqid para generar id 
npm install uniqid

# se crea la funcion de agregar usuario
function nuevousuario(){
 let usuario={
  nombre:nombre,
  email:email,
  telefono:telefono,
  Id:uniqid()
 } 
 console.log(usuario) 
 axios.post('/api/usuarios/agregar',usuario)
 .then(res=>{
   alert(res.data) 
 }
 .then(err=>{console.log(err)})
 )
  
}
# se  instala la dependencia de axios para  enviar comunicaciones dentro del back y el fron
npm install axios  

# package.json se crea el atributo proxy para hacer comunicaciones con el backend
 "proxy":"http://localhost:5000/"  

 # se trabaja en el listar usuarios con los hooks y el use efect en el componerte listarusuario.js

const [datausuarios, setdatausuario]=useState([])

useEffect(()=>{
    axios.get('/api/usuario/obtener').then(res=>{
        console.log(res.data);
        setdatausuario(res.data)
    }).catch(error=>{
        console.log(error);
    })
},[])
//mapear lista de usuarios

const Listausuario=datausuarios.map(usuario=>{
    return(
    <div>
     <Usuarioindividual usuario={usuario}/>   
    </div>
    )
})
    return(
        <div>
         <h2>Listausuarios</h2>
         {Listausuario}
         </div>
         )
}

# luego se pasa el mapeo del objeto usuario al  usuarioindividual.js como parametro y se desestructura
function Usuarioindividual({usuario}) {
  return (
    <div className="container">
      <div className="row">
        <ul className="list-group">
        <li className="list-group-item">{usuario.idusuario}</li>
          <li className="list-group-item">{usuario.nombre}</li>
          <li className="list-group-item">{usuario.email}</li>
          <li className="list-group-item">{usuario.telefono}</li>
        </ul>
        <btn className="btn btn-success">editar</btn>
        <btn className="btn btn-danger">borrar</btn>
        <hr className="mt-4"></hr>
      </div>
    </div>
  );
} 
# se  crean los botones de editar y eliminar con la etiqueta link
<Link to={`/editar/${usuario.idusuario}`}><li className="btn btn-success">editar</li></Link>
<Link to={`/editar/${usuario.idusuario}`}><li className="btn btn-danger m-4">borrar</li></Link>

luego   con estos botones se pasa el id del elemeto de referencia a eliminar
# se copia la estructra de bostrap de agregarusuario para el componente  edirtar usuario
         <div className="container">
      <div className="row">
        <h2 className="mt-4 text-center">Editar usuario</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3 border mt-5">
          <div className="mb-3">
            <label htmlform="nombre" className="form-label">
              Nombre
            </label>
            <input
              className="form-control"
              type="text"
              value={nombre}
              onChange={(e) => {
                setnombre(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlform="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlform="telefono" className="form-label">
              telefono
            </label>
            <input
              className="form-control"
              type="email"
              value={telefono}
              onChange={(e) => {
                settelefono(e.target.value);
              }}
            ></input>
          </div>
          <button onClick={actulizaruser} className="btn btn-primary">
            Editar usuario
          </button>
        </div>
      </div>
    </div>
# se trabaja en la logica de editar componente 
  //hooks para  listar los datos cargados desde la base de datos
  const [nombre, setnombre] = useState("");
  const [email, setemail] = useState("");
  const [telefono, settelefono] = useState("") 
// para  listar los campos de la base datos al formulario  por id cargado
  useEffect(()=>{
    axios.post('/api/usuario/editaruser',{idusuario:params.idusuario}).then(res=>{
        console.log(res.data[0]);
        const datausuario=res.data[0]
        setnombre(datausuario.nombre)
        setemail(datausuario.email)
        settelefono(datausuario.telefono)
      
    })
},[])

// funcion para guardar los cambios
function actulizaruser(){
 //modelo de datos de actulizar usuario
   const actualizarusuario={
    nombre:nombre,
    email:email,
    telefono:telefono,
    idusuario: params.idusuario
   }
   //perticion de la base de datos
   axios.post("/api/usuario/actulizausuario", actualizarusuario)
    .then((res) => {
      console.log(res.data);
     alert(res.data)})
    .then((err) =>  console.log(err));
  }

# se crea trabaja en el boton de borrar user se crea la funcion borrarusuario

<Link className="btn btn-danger m-4" onClick={()=>{borraruser(usuario.idusuario)}}><li >borrar</li></Link> 
-luego se crea la peticion
   function borraruser(idusuario){
    axios.post('/api/usuario/borraruser',{idusuario: idusuario}).then(res=>{
      console.log(res.data);
      alert(res.data)   
  }).catch(err=> console.log(err))
  }

se usa navigeitor para refrescar cada elemto cuando se elimine 

# para dar animaciones se intala la libreria aos
npm install aos
se importa al componete que se va aplicar (en este caso listar usuarioindiidual)
import AOS from "aos"
import "aos/dist/aos.css" 

se  inicializa mediante un useEFect()
useEffect(()=>{
  AOS.init()
}) 
---con el atributo  data-aos="{efecto que quiera}" se aplica los  efectos
 <div className="col col-sm-6" data-aos="flip-left">

 #para trabajar alertas se hace por el  Swalalert2
 npm install sweetalert2 

 --se intala en el archivo que se va a trabajar  en este ejemplo en  agregar usuario
 import Swal from 'sweetalert2';
--luego se coloca  en  la funcion para crear la alerta
   axios.post("/api/usuario/agregar", usuario)
    .then((res) => {
     // alert(res.data)
      Swal.fire({
        
        icon: 'success',
        title: 'eliminar',
        text: 'usuario eliminado correctamente',
    })  
    .then((err) => {
        console.log(err);
      });
    });
  }