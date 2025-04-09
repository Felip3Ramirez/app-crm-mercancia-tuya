import { Link, useNavigate } from "react-router-dom";
import { alertaRedireccion } from "../helpers/funcione";


const MenuLateral = () => {
  let redireccion = useNavigate();
  function cerrarSesion() {
    alertaRedireccion(redireccion, "Sesión cerrada", "Sera redieccionado al Login", "info", "/")
    localStorage.removeItem("token");
  }
  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Track <span className="aplicacion__menu-lateral-logo--resaltado">X</span></h1>
      <h2>Usuario: Admin</h2>
      <img className="aplicacion__menu-lateral-logo-imagen" src="/logo.jpg" alt="Logo" />
      <nav className="aplicacion__menu-lateral-navegacion">
        <Link className="aplicacion__menu-lateral-navegacion-item" to="">Inicio</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="">Gestión de envíos</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="">Gestión de clientes</Link>
        <button type='button' className="aplicacion__menu-lateral-navegacion-item" onClick={cerrarSesion}>Cerrar sesión</button>
      </nav>
    </aside>
  )
}

export default MenuLateral