import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  alertaGenerica,
  alertaRedireccion,
  generarToken,
} from "../helpers/funcione";

let apiUsuarios = "https://back-json-server-tuya.onrender.com/usuarios";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [getHoraLogin, setHoraLogin] = useState("");
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
      setHoraLogin(new Date().toLocaleDateString());
      let horaInicio = new Date();
      console.log(horaInicio);
      let tokenAcceso = generarToken();
      localStorage.setItem("token", tokenAcceso);
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
