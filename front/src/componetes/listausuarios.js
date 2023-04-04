import axios from 'axios';
import React, { useEffect, useState } from "react";
import Usuarioindividual from "./usuarioindividual";


function Listausuarios(){

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


export default Listausuarios;