import React from 'react';
import './style.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div>
        <h1>404</h1>
        <img src='/404.png' alt=''/>
      </div>
      <p >Página Não Encontrada, SORRY</p>
      <a href="/" >Voltar para a Página Inicial</a>
    </div>
  );
};

export default NotFound;
