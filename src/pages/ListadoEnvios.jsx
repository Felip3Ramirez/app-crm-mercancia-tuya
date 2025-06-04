import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { alertaGenerica } from "../helpers/funcione";
let apiEnvios = "https://back-json-server-tuya.onrender.com/envios";
export default function ListadoEnvios() {
  const [envios, setEnvios] = useState([]);
  let usuarioLogeado = JSON.parse(localStorage.getItem("usuario"));
  function getEnvios() {
    fetch(apiEnvios)
      .then((Response) => Response.json())
      .then((data) => setEnvios(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getEnvios();
  }, []);

  function filtrarEnvios() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let filtrado = envios.filter((item) => item.idUsuario == usuario.id);
    return filtrado;
  }
  let filtradoUsuario = filtrarEnvios();

  function eliminarEnvio(id) {
    fetch(apiEnvios + "/" + id, {
      method: "DELETE",
    })
      .then(() => {
        alertaGenerica(
          "Envio eliminado",
          "El envio ha sido eliminado correctamente",
          "success"
        );
        getEnvios();
      })
      .catch((error) =>
        alertaGenerica("Error", error + "No se pudo eliminar el envio", "error")
      );
  }

  return (
    <div className="cards">
      {filtradoUsuario.length > 0 ? (
        filtradoUsuario.map((envio) => (
          <div className="card" key={envio.id}>
            <p className="card__descripcion">
              {" "}
              Descripcion: {envio.descripcion}
            </p>
            <p className="card__fecha">Fecha: {envio.fecha}</p>
            <h3 className="card__titulo">Origen: {envio.origen}</h3>
            <h3 className="card__titulo">Destino: {envio.destino}</h3>
            <h3 className="card__titulo">Estado: {envio.estado}</h3>
            <div className="card__buttons">
              <button
                className="card__button"
                onClick={() => eliminarEnvio(envio.id)}
              >
                Eliminar
              </button>
              <Link className="card__button" to={"/home/editar/" + envio.id }> Editar</Link>
            </div>
          </div>
        ))
      ) : (
        <h2 className="aplicacion__eslogan-texto">
          No hay registros en el sistema
        </h2>
      )}
    </div>
  );
}
