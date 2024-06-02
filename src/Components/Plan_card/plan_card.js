import React from "react";
import { Link } from "react-router-dom";

import "./plan_card.css";

const plan_card = () => {
  return (
    <section className="Dyeison3">
      <div className="plans-container">
        <div className="plan-card">
          <h3>Plano Básico</h3>
          <p className="price">R$ 29,90/mês</p>
          <ul>
            <li>2 Anuncio</li>
            <li>Suporte Básico</li>
            <li>Suporte Prioritário</li>
            <li>Retorna 70% do valor do produto</li>
          </ul>
          <Link to="/login" className="buy-button">
            Comprar
          </Link>
        </div>
        <div className="plan-card">
          <h3>Plano Padrão</h3>
          <p className="price">R$ 59,90/mês</p>
          <ul>
            <li>5 Anuncios</li>
            <li>Suporte Prioritário</li>
            <li>Retorna 80% do valor do produto</li>
          </ul>
          <Link to="/login" className="buy-button">
            Comprar
          </Link>
        </div>
        <div className="plan-card">
          <h3>Plano Premium</h3>
          <p className="price">R$ 99,90/mês</p>
          <ul>
            <li>15 Anuncios</li>
            <li>Suporte 24/7</li>
            <li>Retorno de 90 % do valor do produto</li>
          </ul>
          <Link to="/login" className="buy-button">
            Comprar
          </Link>
        </div>
        <div className="plan-card">
          <h3>Plano Empresarial</h3>
          <p className="price">R$ 199,90/mês</p>
          <ul>
            <li>Anuncios Ilimitados</li>
            <li>Gerente de Anuncios Dedicado</li>
            <li>Retorno de 98% do valor do </li>
          </ul>
          <Link to="/login" className="buy-button">
            Comprar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default plan_card;
