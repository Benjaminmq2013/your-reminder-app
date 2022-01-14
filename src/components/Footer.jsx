import React from "react";
import { Link } from "react-router-dom"
import "../styles/Footer.css"
import home_icon from "../assets/icons/home-icon.svg"
import login_icon from "../assets/icons/login-icon.svg"

const Footer = () => {
  return (
    <footer className="Footer">
      <Link className="footer_navigation_link" to="/">
        <img className="home_icon" src={home_icon} alt="" />
        <span className="footer_btn_text">Inicio</span>
      </Link>
      <Link className="footer_navigation_link" to="/login">
        <img className="login_icon" src={login_icon} alt="" />
        <span className="footer_btn_text">Iniciar Sesion</span>
      </Link>
    </footer>
  );
};

export default Footer;
