import { useState } from "react";
import "./Login.css";
function Login() {
    const [name, setName] = useState( )
  return (
    <form class="form">
        Sing Up
      <input type="text" class="input" placeholder="Name" />
      <input type="text" class="input" placeholder="Password" />
      <button>Submit</button>
    </form>
  );
}
export default Login;
