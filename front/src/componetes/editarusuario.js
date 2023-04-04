import React ,{ useEffect,useState }  from "react";
import { useParams}  from "react-router";
import axios from 'axios';
function Editarusuario(){

const params = useParams()
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
   //peticion de la base de datos para modificar los datos del usuario  que tenga la base de datos
   axios.post("/api/usuario/actulizausuario", actualizarusuario)
    .then((res) => {
      console.log(res.data);
     alert(res.data)})
    .then((err) =>  console.log(err));
  }
    return(
       
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
       
    )
}


export default Editarusuario;