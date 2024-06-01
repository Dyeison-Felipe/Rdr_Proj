import React, { useState } from 'react';
import Modal from '../../../Components/Modal/Modal';
import Pagination from '../../../Components/Pagination/Pagination';
import './styles.css';
import Header from '../../../Components/HeaderContent';


const Roupas = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (title, imageSrc, summary, description) => {
    setModalData({ title, imageSrc, summary, description });
  };


  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div>
      <Header />
      <div className="Ruan">
        <div className="container">
          <h1>Roupas</h1>
          <div className="Prod-grid">
            <div className="Prod">
              <h1>Moleton Masculino</h1>
              <img src="assetss/imagens/Roupas/moleton.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$190,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Roupas/moleton.jpg',
                  <span>'R$190,00'</span>,
                  ['Cor: Preto ', 'tamanho: M', 'Altura: 70cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Moleton Masculino</h1>
              <img src="assetss/imagens/Roupas/moleton.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$190,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Roupas/moleton.jpg',
                  <span>'R$190,00'</span>,
                  ['Cor: Preto ', 'tamanho: M', 'Altura: 70cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Moleton Masculino</h1>
              <img src="assetss/imagens/Roupas/moleton.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$190,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Roupas/moleton.jpg',
                  <span>'R$190,00'</span>,
                  ['Cor: Preto ', 'tamanho: M', 'Altura: 70cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Moleton Masculino</h1>
              <img src="assetss/imagens/Roupas/moleton.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$190,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Roupas/moleton.jpg',
                  <span>'R$190,00'</span>,
                  ['Cor: Preto ', 'tamanho: M', 'Altura: 70cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Moleton Masculino</h1>
              <img src="assetss/imagens/Roupas/moleton.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$190,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Roupas/moleton.jpg',
                  <span>'R$190,00'</span>,
                  ['Cor: Preto ', 'tamanho: M', 'Altura: 70cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Moleton Masculino</h1>
              <img src="assetss/imagens/Roupas/moleton.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$190,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Roupas/moleton.jpg',
                  <span>'R$190,00'</span>,
                  ['Cor: Preto ', 'tamanho: M', 'Altura: 70cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Moleton Masculino</h1>
              <img src="assetss/imagens/Roupas/moleton.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$190,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Roupas/moleton.jpg',
                  <span>'R$190,00'</span>,
                  ['Cor: Preto ', 'tamanho: M', 'Altura: 70cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Moleton Masculino</h1>
              <img src="assetss/imagens/Roupas/moleton.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$190,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Roupas/moleton.jpg',
                  <span>'R$190,00'</span>,
                  ['Cor: Preto ', 'tamanho: M', 'Altura: 70cm'])}> Ver Mais</button>
            </div>
            <div className="Prod">
              <h1>Moleton Masculino</h1>
              <img src="assetss/imagens/Roupas/moleton.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>-------------</p>
              <span>R$190,00</span>
              <button className="vis-prod" onClick={() => openModal
                ('Gabinete gamer',
                  'assetss/imagens/Roupas/moleton.jpg',
                  <span>'R$190,00'</span>,
                  ['Cor: Preto ', 'tamanho: M', 'Altura: 70cm'])}> Ver Mais</button>
            </div>
          </div>
        </div>
        <Pagination />
        {modalData && <Modal {...modalData} closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Roupas;
