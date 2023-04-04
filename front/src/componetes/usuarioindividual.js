import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import AOS from "aos"
import "aos/dist/aos.css"
function Usuarioindividual({usuario}) {

// para animacion  de scroll al bajar 
useEffect(()=>{
  AOS.init()
})



 // para refrescar el  doom de reac js
 const navigar= useNavigate();



  //funcion para borrar usuario 
  function borraruser(idusuario){
    axios.post('/api/usuario/borraruser',{idusuario: idusuario}).then(res=>{
      console.log(res.data);
      //alert(res.data) 
      Swal.fire({
        icon: 'error',
        title: 'eliminar',
        text: 'usuario eliminado correctamente',
        
      })
      // para volver al indice 0 despues de eliminar datos
      navigar(0)
  }).catch(err=> console.log(err))
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col col-sm-6" data-aos="flip-left">
        <ul className="list-group">
        <li className="list-group-item">{usuario.idusuario}</li>
          <li className="list-group-item">{usuario.nombre}</li>
          <li className="list-group-item">{usuario.email}</li>
          <li className="list-group-item">{usuario.telefono}</li>
        </ul> 
       <Link to={`/editar/${usuario.idusuario}`}><li className="btn btn-success">editar</li></Link>
       <button className="btn btn-danger m-4" onClick={()=>{borraruser(usuario.idusuario)}}>Borrar</button> 
        <hr className="mt-4"></hr>
      </div>
      </div>
    </div>
  );
  }

export default Usuarioindividual;
