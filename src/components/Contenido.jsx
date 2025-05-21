import React from 'react'
import CrearEnvio from '../pages/CrearEnvio'
import { Outlet } from 'react-router-dom'
const Contenido = () => {
  return (
    <section className="aplicacion__informacion">
        <Outlet></Outlet>
    </section>
  )
}

export default Contenido