import React from "react"
import { Link } from "react-router-dom"
import "../styles/LoginWrapper.css"
import register_icon from "../assets/icons/register-icon.svg"
import RegisterForm from "../components/RegisterForm"

const LoginWrapper = () => {
  return (
    <div className="LoginWrapper">
      <div className="LoginContainer">
        <h2 className="login_title">¡Crea tu cuenta!</h2>
        <img 
            src={register_icon} 
            alt="register-icon" 
            className="register_icon"
        />        
        <RegisterForm />
        <Link className="login-link" to="/register">¿Ya tienes cuenta?</Link>
      </div>
    </div>
  );
};

export default LoginWrapper;