import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../Images/Site/logo.png";
import { FiAlignJustify } from "react-icons/fi";

const Index = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="menu">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/">Planos</Link>
            <Link to="/">Contato</Link>
          </nav>
        </div>
        <div className="acess">
          <Link className="btn-link" to='/login'>Login</Link>

          <Link className="btn-link" to='/register'>Registre-se</Link>
        </div>
        <div className="icon">
          <FiAlignJustify />
        </div>
      </div>
    </header>
  );
};

export default Index;
