import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    alertaGenerica,
    alertaRedireccion
} from "../helpers/funcione";
import "./Registro.css";

let apiUsuarios = "https://back-json-server-tuya.onrender.com/usuarios";

function Registro() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [getUser, setUser] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  let redireccion = useNavigate();

  function getUsuarios() {
    fetch(apiUsuarios)
      .then((Response) => Response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.log(error));
      
  }
  
  useEffect(() => {
    getUsuarios();
  },[]);

  function buscarUsuario() {
    let user = usuarios.find((item) => getUser == item.user);
    return user;
  }
  

  function registrarUsuario() {
    if (buscarUsuario()) {
        alertaGenerica("Error", "Usuario ya existe en la base de datos", "error");
    } else {
        let nuevoUsuario = {
            nombre: name,
            user:getUser,
            password:password
        }
        fetch(apiUsuarios, {
            method:"POST",
            body:JSON.stringify(nuevoUsuario)
        }).then(()=>{getUsuarios()})

        alertaRedireccion(
          redireccion,
          "Registro Exitoso",
          "Bienvenido",
          "success",
          "/"
        );
      
    }
  }

  return (
    <form className="form">
      Sing Up
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="input"
        placeholder="Name"
      />
      <input
        onChange={(e) => setUser(e.target.value)}
        type="text"
        className="input"
        placeholder="Usuario"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        className="input"
        placeholder="Password"
      />
      <button type="button" onClick={registrarUsuario}>
        Submit
      </button>
        <Link to="/" className="">Ya tiene una cuenta? Inicia sesion </Link>
    </form>
  );
}
export default Registro;
