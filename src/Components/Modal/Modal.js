import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ title, imageSrc, summary, description, closeModal }) => {
  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <img id="modal-image" src={imageSrc} alt={title} />
        <h2 id="modal-title">{title}</h2>
        <p id="modal-summary">{summary}</p>
        <ul id="modal-description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link to="/payment">
          <Link to="/shop-cart"><button className="vis-prod">Add Carrinho</button></Link>
          <button className="vis-prod">Comprar</button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
