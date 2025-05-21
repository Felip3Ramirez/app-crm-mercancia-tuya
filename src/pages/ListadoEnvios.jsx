import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { alertaGenerica } from "../helpers/funcione";
let apiEnvios = "https://back-json-server-tuya.onrender.com/envios";

export default function ListadoEnvios() {
  const [envios, setEnvios] = useState([]);

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
    let envio = envios.find((item) => name == item.name && password == item.password);
    return user;
  }

  return <div>hdsi</div>;
}
