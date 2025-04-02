import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [getHoraLogin, setHoraLogin] = useState("")
    let redireccion = useNavigate()

    function iniciarSesion (user,password){
        if(user === "admin" && password==="123456"){
          setHoraLogin(new Date().toLocaleDateString())
          let horaInicio = new Date();
          console.log(horaInicio);
          
            redireccion('/home')
        }else{
        alert('Error de credenciales')}
    }

    
    
  return (
    <form className="form">
        Sing Up
      <input onChange={(e) => setName(e.target.value)} type="text" className="input" placeholder="Name" />
      <input onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Password" />
      <button type="button" onClick={()=> iniciarSesion(name,password)}>Submit</button>
    </form>
  );
}
export default Login;
