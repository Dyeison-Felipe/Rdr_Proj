import { Link } from "react-router-dom";
import HeaderInitial from "../../../Components/HeaderInitial/index";
import Cars from "../Carousel/cars";
import Electronics from "../Carousel/electronics";
import Clothers from "../Carousel/clothes";

import "./style.css";

const index = () => {
  return (
    <div className="envolv">
      <HeaderInitial />

      <h1>Destaques</h1>

      <div className="product-container">
        <div className="product">
          <img
            src="/Images/ImagesDyeison/Electronics/AppleWatch.png"
            alt="Fone de ouvido gamer"
          />
          <h3>AppleWatch SE</h3>
          <div>
            <p>de <del>R$3.699,00</del></p>
            <p>por R$2.589,30</p>
          </div>
          <Link to="/login" className="btn-emphasis">
            Comprar
          </Link>
        </div>

        <div className="product">
          <img
            src="/Images/ImagesDyeison/Electronics/JBL Pulse 5 BLK.png"
            alt="Caixa de som Jbl pulse 5"
          />
          <h3>JBL Pulse 5</h3>
          <div>
            <p>de <del>R$1.617,00</del></p>
            <p>por R$1.374,45</p>
          </div>
          <Link to="/login" className="btn-emphasis">
            Comprar
          </Link>
        </div>

        <div className="product">
          <img
            src="/Images/ImagesDyeison/Electronics/Poco x6 Pro.png"
            alt="Celular Poco X6 Pro"
          />
          <h3>Poco X6 Pro</h3>
          <div>
            <p>de <del>R$2.250,00</del></p>
            <p>por R$1.912,50</p>
          </div>
          <Link to="/login" className="btn-emphasis">
            Comprar
          </Link>
        </div>

        <div className="product">
          <img
            src="/Images/ImagesDyeison/Electronics/Iphone 15 Pro Max.png"
            alt="Celular iphone 15 Pro Max"
          />
          <h3>Iphone 15 Pro Max</h3>
          <div>
            <p>de <del>R$10.999,00</del></p>
            <p>por R$9.349,15</p>
          </div>
          <Link to="/login" className="btn-emphasis">
            Comprar
          </Link>
        </div>
      </div>

      <div className="sponsorship">
        <img
          src="/Desconto.png"
          alt="Desconto especial"
          className="patrocinio"
        />
        <p className="discount-text">Todos nosso produtos com desconto disponíveis até 12/06/2024 com o cupom  <span>RDR-Vendas</span></p>
        <p className="discount-text">
          Não perca nossas ofertas especiais! Economize agora!
        </p>
      </div>

      <div className="carousel">
        <Cars />
        <Electronics />
        <Clothers />
      </div>
    </div>
  );
};

export default index;
