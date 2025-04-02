import Swal from "sweetalert2"

export function alertaConfirmacion (){
    Swal.fire({
      title: "Bienvenid@!",
      text: "Has iniciado sesion de forma correcta!",
      icon: "success"
    })
}
export function alertaError(){
Swal.fire({
  title: "Credenciales Incorrectas!",
  text: "Favor verificar credenciales",
  icon: "error"
})
}