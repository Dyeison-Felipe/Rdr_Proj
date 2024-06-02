import { Link } from "react-router-dom";
import HeaderInitial from "../../../Components/HeaderInitial/index";
import { useState } from "react";

import "./style.css";

const Index = () => {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="Dyeison1">
      <HeaderInitial />
      <div className="container-access">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              
              <span className="login-form-title"> Bem vindo </span>

              <span className="login-form-title">
                <img src="/logo.png" alt="Logo RDR" />
              </span>

              <div className="wrap-input">
                <input
                  className={usuario !== "" ? "has-val input" : "input"}
                  type="email"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Usuário"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Senha"
                ></span>
              </div>

              <div className="container-login-form-btn">
                <Link 
                to='/produtos'  
                className="login-form-btn" 
                >
                  Login
                </Link>
              </div>

              <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <Link className="txt2" to="/register">Criar conta</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
