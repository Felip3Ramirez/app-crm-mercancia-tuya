import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  alertaGenerica,
  alertaRedireccion,
  generarToken,
} from "../helpers/funcione";
import "./Login.css";

let apiUsuarios = "https://back-json-server-tuya.onrender.com/usuarios";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
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
    let user = usuarios.find((item) => name == item.user && password == item.password);
    return user;
  }
  

  function iniciarSesion() {
    if (buscarUsuario()) {
      let tokenAcceso = generarToken();
      localStorage.setItem("token", tokenAcceso);
      localStorage.setItem("usuario", JSON.stringify(buscarUsuario()));
      alertaRedireccion(
        redireccion,
        "Bienvenido",
        "Sera redieccionado al Home",
        "success",
        "/home"
      );
    } else {
      alertaGenerica("Error", "Usuario o contraseña incorrectos", "error");
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
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        className="input"
        placeholder="Password"
      />
      <button type="button" onClick={iniciarSesion}>
        Submit
      </button>
    </form>
  );
}
export default Login;
