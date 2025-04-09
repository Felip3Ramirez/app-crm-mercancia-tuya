import Swal from "sweetalert2";

export function generarToken(){

}

export function alertaRedireccion(redireccion ,titulo, texto, icono, ruta){
    let timerInterval;
    Swal.fire({
      title: titulo,
      html: texto,
      timer: 2000,
      icon: icono,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        redireccion(ruta);
      }
    })
}

export function alertaGenerica(titulo, texto, icono){
    Swal.fire({
      title: titulo,
      text: texto,
      icon: icono
    });
}