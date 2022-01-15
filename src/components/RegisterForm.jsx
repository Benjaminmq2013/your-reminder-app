import React from "react"
import "../styles/RegisterForm.css"

const RegisterForm = () =>{
    return(
        <form className="RegisterForm" action="post">
            <input type="text" name="name" placeholder="Nombre" required/>
            <input type="text" name="email" placeholder="Email"  required/>
            <input type="Email" name="password" placeholder="Contraseña"  required/>
            <button className="submitButton">CREAR CUENTA</button>
        </form>
    )
}

export default RegisterForm;