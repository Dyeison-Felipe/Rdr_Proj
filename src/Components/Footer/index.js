import React from "react";
import './style.css'
import Facebook from '../../Images/Site/facebook.png'
import Instagram from '../../Images/Site/instagram.png'
import Twitter from '../../Images/Site/twitter.png'
import Logo from "../../Images/Site/logo.png"


const Footer = () => {
  return (
    <footer id="rodape">
      <div id="redes-sociais">
        <img src={Facebook} alt="" />
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
      </div>

      <h2 id="Copy">₢Copyright - todos os direitos reservados a RDR</h2>

      <img src={Logo} alt="" />
    </footer>
  );
};

export default Footer;
