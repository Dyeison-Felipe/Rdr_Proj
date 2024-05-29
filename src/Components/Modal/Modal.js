import React from 'react';

const Modal = ({ title, imageSrc, summary, closeModal }) => {
  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <img id="modal-image" src={imageSrc} alt={title} />
        <h2 id="modal-title">{title}</h2>
        <p id="modal-summary">{summary}</p>
        <a href="leitura.html">
          <button id="ler-livro-modal" className="ler-livro">Comprar</button>
        </a>
      </div>
    </div>
  );
};



export default Modal;


