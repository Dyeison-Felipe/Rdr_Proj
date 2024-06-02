import React, { useState } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

//         Estilos
import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

register();

export default function CarComputer() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dataCarros = [
    { id: "1", image: "/Images/ImagesDyeison/Cars/Mustang.png", price: "R$ 395.000", title: "Mustang 5.0" },
    { id: "2", image: "/Images/ImagesDyeison/Cars/golf.jpg", price: "R$ 141.000", title: "Golf GTI" },
    { id: "3", image:"/Images/ImagesDyeison/Cars/Gol.png", price: "R$ 89.000", title: "Gol 1.6" },
    { id: "4", image: "/Images/ImagesDyeison/Cars/Ferrari.png", price: "R$ 3.043.952", title: "Ferrai 488" },
    { id: "5", image: "/Images/ImagesDyeison/Cars/Celta.png", price: "R$ 25.000", title: "Celta 1.0" },
    {id: "6", image: "/Images/ImagesDyeison/Cars/Lambo.png", price: "R$ 6.890.000", title: "Lamborghini Aventador",},
    { id: "7", image: "/Images/ImagesDyeison/Cars/Mobi.png", price: "R$ 72.000", title: "Fiat Mobi" },
    { id: "8", image: "/Images/ImagesDyeison/Cars/Saveiro.png", price: "R$ 109.000", title: "Saveiro Pancadão" },
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
        <h1>Veículos</h1>
        <Swiper
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
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
          {dataCarros.map((item) => (
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
            <p>{selectedProduct.description}</p>
            <Link className="btn-comp" to="/login">
              Ver Mais
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
