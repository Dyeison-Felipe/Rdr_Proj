import React, { useState } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";


import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

register();

export default function Roupas() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dataRoupas = [
    {
      id: "1",
      image: "/Images/ImagesDyeison/Clothes/masculine/CamisaSocialAzul.png",
      price: "R$ 189,00",
      title: "Camisa social azul",
    },
    { id: "2",
      image: "/Images/ImagesDyeison/Clothes/Feminine/tenis-caramelo.png",
      price: "R$ 149,00", 
      title: "Tenis Caramelo" 
    },
    {
      id: "3",
      image: "/Images/ImagesDyeison/Clothes/Feminine/blusao-de-trico-preto.png",
      price: "R$ 129,99",
      title: "Moletom de Trico",
    },
    { id: "4",
      image: "/Images/ImagesDyeison/Clothes/masculine/moleton.jpg", 
      price: "R$ 190,00",
      title: "Conjunto" 
    },
    {
      id: "5",
      image: "/Images/ImagesDyeison/Clothes/masculine/Camisa Social cinza.png",
      price: "R$ 210,00",
      title: "Camisa social Cinza",
    },
    { id: "6", 
      image:  "/Images/ImagesDyeison/Clothes/Feminine/vestido.png", 
      price: "R$ 79,90", title: "Regata" 
    },
    { id: "7",
      image: "/Images/ImagesDyeison/Clothes/Feminine/princesa.png", 
      price: "R$ 109,98", 
      title: "Fantasia" 
    },
    {
      id: "8",
      image: "/Images/ImagesDyeison/Clothes/masculine/Camisa Social.png"
      ,
      price: "R$ 199,00",
      title: "Camisa social preta",
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="embracing">
      <div className="containers">
        <h1>Roupas</h1>
        <Swiper
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3500 }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {dataRoupas.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                to=""
                className="link-product "
                onClick={() => handleProductClick(item)}
              >
                <div className="img-item">
                  <img
                    className="slide-item"
                    src={item.image}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                  <h2>{item.price}</h2>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h1>{selectedProduct.title}</h1>
            <img src={selectedProduct.image} alt="" />
            <p>{selectedProduct.price}</p>
            <Link className="btn-comp" to="/login">
              Ver Mais
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
