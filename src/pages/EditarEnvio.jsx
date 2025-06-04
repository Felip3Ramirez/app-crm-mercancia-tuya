import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { alertaGenerica, alertaRedireccion } from "../helpers/funcione";
import "./CrearEnvio.css";

let apiEnvios = "https://back-json-server-tuya.onrender.com/envios";
export default function EditarEnvio() {
  const [name, setName] = useState("");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");

  let redireccion = useNavigate();
  let { id } = useParams();

  function getEnvioId(){
    fetch(apiEnvios + "/" + id)
    .then((response)=> response.json())
    .then((data) => {
        setName(data.descripcion);
        setOrigen(data.origen);
        setDestino(data.destino);
        setFecha(data.fecha);
        setEstado(data.estado);
    }).catch(()=>{
        alertaGenerica("Error","No se pudo obtener envio","error")
    })
  }
  useEffect(()=>{
    getEnvioId()
  }, [])

  function editarEnvio() {
    let nuevoEnvio = {
      descripcion: name,
      origen: origen,
      destino: destino,
      fecha: fecha,
      estado: estado,
    };
    fetch(apiEnvios+"/"+id, {
      method: "PATCH",
      body: JSON.stringify(nuevoEnvio),
    })
      .then(() => {
        alertaRedireccion(
          redireccion,
          "Envio editado",
          "Sera redirecionando al listado",
          "success",
          "/home/listar"
        );
      })
      .catch(() => {
        alertaGenerica("Error", "No se pudo registrar el envio", "error");
      });
  }

  return(
  <form className="form">
    Editar Envio
    <input
      onChange={(e) => setName(e.target.value)}
      value={name}
      type="text"
      className="input"
      placeholder="Name"
    />
    <input
      onChange={(e) => setOrigen(e.target.value)}
      value={origen}
      type="text"
      className="input"
      placeholder="Origen"

    />
    <input
      onChange={(e) => setDestino(e.target.value)}
      value={destino}
      type="text"
      className="input"
      placeholder="Destino"
    />
    <input
      onChange={(e) => setFecha(e.target.value)}
      value={fecha}
      type="date"
      className="input"
      placeholder="Fecha"
    />
    <select value={estado} name="" id="" onChange={(e) => setEstado(e.target.value)}>
      <option value="">Seleccion...</option>
      <option value="Pendiente">Pendiente</option>
      <option value="Creado">Creado</option>
      <option value="Cancelado">Cancelado</option>
      <option value="Finalizado">Finalizado</option>
    </select>
    <button type="button" onClick={editarEnvio}>
      Submit
    </button>
    <Link to="/home/listar">Cancelar</Link>
  </form>
  )
}
