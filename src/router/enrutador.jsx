/* El enrutador es un arreglo de objetos */
/* El objeto se construye con el componente y la ruta */
import Home from "../pages/Home";
import Login from "../pages/Login";
import RutaProtegida from "../components/RutaProtegida";
import Registro from "../pages/Registro";
import CrearEnvio from "../pages/CrearEnvio";
import ListadoEnvios from "../pages/LIstadoEnvios";
import EditarEnvio from "../pages/EditarEnvio";
export let enrutador = [
  {
    path: "/home/",
    element: <RutaProtegida proteger={<Home />}></RutaProtegida>,
    children: [
      {
        path: "crearEnvio",
        element: <CrearEnvio></CrearEnvio>,
      },
      {
        path:"listar",
        element:<ListadoEnvios></ListadoEnvios>
      },
      {
        path:"editar/:id",
        element:<EditarEnvio></EditarEnvio>
      }
    ],
  },
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/Registro",
    element: <Registro></Registro>,
  }
];
