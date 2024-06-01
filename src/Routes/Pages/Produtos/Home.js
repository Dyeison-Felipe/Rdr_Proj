import React from 'react';
import './styles.css';
import Header from '../../../Components/HeaderContent';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='Ruan'>
        <div className="container">
          <h1>Produtos em Destaque</h1>
          <div className="Prod-grid">
            <div className="Prod">
              <h1>Civic 2011 1.8 manual</h1>
              <img src="assetss/imagens/carros/civic.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>Carro em ótimo estado</p>
              <span>R$15.000,00</span>
              <button className="vis-prod">Comprar</button>
            </div>
            <div className="Prod">
              <h1>Opala Diplomata 99</h1>
              <img src="assetss/imagens/carros/opala.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>Carro para colecionadores</p>
              <span>R$35.000,00</span>
              <button className="vis-prod">Comprar</button>
            </div>
            <div className="Prod">
              <h1>Uno 99 1.0</h1>
              <img src="assetss/imagens/carros/uno.jpg" alt="Vectra 94/95 2.0 8v" />
              <p>Carro que se abastece uma vez na vida</p>
              <span>R$15.000,00</span>
              <button className="vis-prod">Comprar</button>
            </div>


            <a href="https://www.disneyplus.com/pt-br?cid=DSS-Search-Google-71700000075038504-&s_kwcid=AL!8468!3!576459364510!e!!g!!disney%20plus&gad_source=1&gclid=EAIaIQobChMI-dKTqYi7hgMVos0WBR2uAg5DEAAYASAAEgK_a_D_BwE&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">
              <div className="banner">
                <img src="assetss/imagens/carros/banner.jpg" alt="Banner Promocional" />
                <p>Confira nossas ofertas especiais!</p>
              </div>
            </a>
            <a href="https://www.amazon.com.br/s?k=prime+day&adgrpid=107358558659&hvadid=595773110157&hvdev=c&hvlocphy=1031775&hvnetw=g&hvqmt=e&hvrand=4086265037829050227&hvtargid=kwd-131638924377&hydadcr=26108_13514925&tag=hydrbrgk-20&ref=pd_sl_9f61m75o0_e">
              <div className="banner">
                <img src="assetss/imagens/carros/banner2.jpg" alt="Banner Promocional" />
                <p>Confira nossas ofertas especiais!</p>
              </div>
            </a>
            <a href="https://www.mercadolivre.com.br/">
              <div className="banner">
                <img src="assetss/imagens/carros/banner3.jpg" alt="Banner Promocional" />
                <p>Confira nossas ofertas especiais!</p>
              </div>
            </a>
            <div className="info-section">
              <div className="info-item">
                <img src="assetss/imagens/carros/sem-contato.png" alt="" />
                <h3>Escolha como pagar</h3>
                <p>Você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x no boleto com o RDR_CARD.</p>
              </div>
            </div>

            <div className="info-section">
              <div className="info-item">
                <img src="assetss/imagens/carros/caminhao.png" alt="" />
                <h3>Frete grátis a partir de R$100</h3>
                <p>Ao se cadastrar no RDR_Vendes, você tem frete grátis em milhares de produtos.</p>
              </div>
            </div>

            <div className="info-section">
              <div className="info-item">
                <img src="assetss/imagens/carros/protecao.png" alt="" />
                <h3>Segurança, do início ao fim</h3>
                <p>Você não gostou do que comprou? Devolva! No RDR_Vendes não há nada que você não possa fazer, porque você está sempre protegido.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
