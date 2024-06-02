import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

import "../HeaderInitial/style.css";

const Header = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  const toggleCategoryMenu = () => {
    setCategoryOpen(!categoryOpen);
  };

  return (
    <header className="Dyeison">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="navbar">
          <div className="search">
            <input type="text" placeholder="Pesquisar..." />
            <Link className="btn-link" to="">
              Pesquisar
            </Link>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/planos">Planos</Link>

            <Link to="https://wa.me/+5542988403565" target="_Blank">
              Contato
            </Link>
            <Link to="/shop-cart">Carrinho</Link>
            <div className="category-menu">
              <Link to="#" onClick={toggleCategoryMenu}>
                Categoria
              </Link>
              {categoryOpen && (
                <div className="submenu">
                  <Link to="/produtos">voltar</Link>
                  <Link to="/carros">Carros</Link>
                  <Link to="/roupas">Roupas</Link>
                  <Link to="/eletros">Eletônicos</Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="btn-lateral">
          <div className="category-menu">
            <Link to="#" className="icon" onClick={toggleCategoryMenu}>
              <FiAlignJustify />
            </Link>
            {categoryOpen && (
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

export default Header;
