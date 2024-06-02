import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

import "./style.css";

const Index = () => {
  const [submenu, setSubmenu] = useState(false);

  const toggleCategoryMenu = () => {
    setSubmenu(!submenu);
  };

  return (
    <header className="Dyeison">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="navbar">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/planos">Planos</Link>
            <Link to="https://wa.me/+5542988403565" target="_Blank">
              Contato
            </Link>
          </nav>
        </div>
        <div className="acess">
          <Link className="btn-link" to="/login">
            Login
          </Link>

          <Link className="btn-link" to="/register">
            Cadastro
          </Link>

          <Link className="btn-link" to="/produtos">
            Convidado
          </Link>
        </div>

        <div className="btn-lateral">
          <div className="category-menu">
            <Link to="#" className="icon" onClick={toggleCategoryMenu}>
              <FiAlignJustify />
            </Link>
            {submenu && (
              <div className="submenu">
                <Link to="/">Home</Link>
                <Link to="/planos">Planos</Link>
                <Link to="https://wa.me/42988403565" target="_Blank">
                  Contato
                </Link>
                <Link className="btn-link" to="/login">
                  Login
                </Link>

                <Link className="btn-link" to="/register">
                  Cadastro
                </Link>

                <Link className="btn-link" to="/headerPos">
                  Convidado
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
