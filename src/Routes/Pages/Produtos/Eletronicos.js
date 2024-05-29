import React, { useState } from 'react';
import Book from '../components/Book';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import eletronicos from '../data/eletronicos';
import '../styless/styles.css';

const Eletronicos = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (title, imageSrc, summary) => {
    setModalData({ title, imageSrc, summary });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="container">
      <h1>Eletrônicos</h1>
      <div className="books-grid">
        {eletronicos.map((eletronico, index) => (
          <Book key={index} book={eletronico} openModal={openModal} />
        ))}
      </div>
      <Pagination />
      {modalData && <Modal {...modalData} closeModal={closeModal} />}
    </div>
  );
};

export default Eletronicos;
