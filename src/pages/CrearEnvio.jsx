import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { alertaGenerica, alertaRedireccion } from "../helpers/funcione";
import "./CrearEnvio.css";

let apiEnvios = "https://back-json-server-tuya.onrender.com/envios";

export default function CrearEnvio() {
  const [name, setName] = useState("");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");

  let redireccion = useNavigate();

  function registrarEnvio() {
    let usuarioLogeado = JSON.parse(localStorage.getItem("usuario"));
    let nuevoEnvio = {
      descripcion: name,
      origen: origen,
      destino: destino,
      fecha: fecha,
      estado: estado,
      idUsuario: usuarioLogeado.id,
    };
    fetch(apiEnvios, {
      method: "POST",
      body: JSON.stringify(nuevoEnvio),
    })
      .then(() => {
        alertaRedireccion(
          redireccion,
          "Envio registrado",
          "Sera redirecionando al listado",
          "success",
          "/home/listar"
        );
      })
      .catch(() => {
        alertaGenerica("Error", "No se pudo registrar el envio", "error");
      });
  }

  return (
    <form className="form">
      Crear Envio
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="input"
        placeholder="Name"
      />
      <input
        onChange={(e) => setOrigen(e.target.value)}
        type="text"
        className="input"
        placeholder="Origen"
      />
      <input
        onChange={(e) => setDestino(e.target.value)}
        type="text"
        className="input"
        placeholder="Destino"
      />
      <input
        onChange={(e) => setFecha(e.target.value)}
        type="date"
        className="input"
        placeholder="Fecha"
      />
      <select name="" id="" onChange={(e) => setEstado(e.target.value)}>
        <option value="">Seleccion...</option>
        <option value="Pendiente">Pendiente</option>
        <option value="Creado">Creado</option>
        <option value="Cancelado">Cancelado</option>
        <option value="Finalizado">Finalizado</option>
      </select>
      <button type="button" onClick={registrarEnvio}>
        Submit
      </button>
      <Link to="/Home">Cancelar</Link>
    </form>
  );
}
