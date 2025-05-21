/* El enrutador es un arreglo de objetos */
/* El objeto se construye con el componente y la ruta */
import Home from "../pages/Home";
import Login from "../pages/Login";
import RutaProtegida from "../components/RutaProtegida";
import Registro from "../pages/Registro";
import CrearEnvio from "../pages/CrearEnvio";
export let enrutador = [
  {
    path: '/home',
    element: <RutaProtegida proteger={<Home/>}></RutaProtegida>
  },
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/Registro',
    element: <Registro></Registro>
  },
  {
    path: '/CrearEnvio',
    element: <CrearEnvio></CrearEnvio>
  }
]
