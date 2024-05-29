import React from 'react';
import Carousel from '../components/Carousel';
import AboutSite from '../components/AboutSite';
import Developers from '../components/Developers';
import '../styless/styles.css';

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <AboutSite />
      <Developers />
    </div>
  );
};

export default Home;
