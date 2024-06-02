import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

register();

export default function CarCompuadores() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dataComputer = [
    { id: "1", image: "/Images/ImagesDyeison/Electronics/fone.png"
    , price: "R$350,00", title: "Fone Gamer" },
    { id: "2", image: "/Images/ImagesDyeison/Electronics/Gabinete gamer.png"
    , price: "R$400,00", title: "Gabinete Gamer" },
    { id: "3", image: "/Images/ImagesDyeison/Electronics/Memoriam ram red.png"
    , price: "R$349,99", title: "32GB" },
    { id: "4", image: "/Images/ImagesDyeison/Electronics/Mmeoria ram.png"
    , price: "R$189,00", title: "16GB" },
    { id: "5", image: "/Images/ImagesDyeison/Electronics/Mouse logitech.png"
    , price: "R$650,98", title: "Mause Logitech" },
    { id: "6", image: "/Images/ImagesDyeison/Electronics/Placa mae.png"
    , price: "R$660,00", title: "Placa mãe BM450" },
    {id: "7",image: "/Images/ImagesDyeison/Electronics/Processador.png"
    ,price: "R$2.800,00",title: "Processador Ryzen7 7800x3d"},
    {id: "8",image: "/Images/ImagesDyeison/Electronics/WaterCooler 130mm.png"
    ,price: "R$199,99",title: "Water cooler 120mm",},
    { id: "9", image: "/Images/ImagesDyeison/Electronics/kit mause + fone.png"
    , price: "R$499,00", title: "Kit Mouse + Fone" },
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
        <h1>Eletrônicos</h1>
        <Swiper
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4000 }}
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
          {dataComputer.map((item) => (
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
    </div>
  );
}
