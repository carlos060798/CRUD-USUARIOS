import React, { useState } from "react";
import uniqid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';

function Agregarusuario() {
  //hooks
  const [nombre, setnombre] = useState("");
  const [email, setemail] = useState("");
  const [telefono, settelefono] = useState("");
  function nuevousuario() {
    let usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: uniqid(),
    };
    console.log(usuario);
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

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4 text-center">Agregar usuario</h2>
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
          <button onClick={nuevousuario} className="btn btn-primary">
            Guardar usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default Agregarusuario;