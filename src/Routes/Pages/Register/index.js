import { Link } from "react-router-dom";
import HeaderInitial from "../../../Components/HeaderInitial";
import "../Login/style.css";
import { useState } from "react";
import Logo from "../../../Images/Site/logo.png";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");


  return (
    <div>
      <HeaderInitial />
      <div className="container-access">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title"> Bem vindo </span>

              <span className="login-form-title">
                <img src={Logo} alt="Logo RDR" />
              </span>

              <div className="wrap-input">
                <input
                  className={name !== "" ? "has-val input" : "input"}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Nome"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={phone !== "" ? "has-val input" : "input"}
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Telefone"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>

              <div className="container-login-form-btn">
                <Link to='/' className="login-form-btn">Cadastrar</Link>
              </div>

              <div className="text-center">
                <span className="txt1">Já possui conta? </span>
                <Link className="txt2" to="/login">
                  Acessar conta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
