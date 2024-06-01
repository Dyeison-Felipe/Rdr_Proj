import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../HeaderInitial/style.css";
import { FiAlignJustify } from "react-icons/fi";
import Logo from "../../Images/Site/logo.png";

const Header = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  const toggleCategoryMenu = () => {
    setCategoryOpen(!categoryOpen);
  };

  return (
    <header className="Dyeison">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="menu">
          <div className="search">
            <input type="text" placeholder="Pesquisar..." />
            <Link className="btn-link" to="">
              Pesquisar
            </Link>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="">Planos</Link>
            <Link to="">Contato</Link>
            <div className="category-menu">
              <Link to="#" onClick={toggleCategoryMenu}>
                Categoria
              </Link>
              {categoryOpen && (
                <div className="submenu">
                  <Link to="/carro">Carros</Link>
                  <Link to="/roupas">Roupas</Link>
                  <Link to="/eletro">Computadores</Link>
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="icon">
          <FiAlignJustify />
        </div>
      </div>
    </header>
  );
};

export default Header;
