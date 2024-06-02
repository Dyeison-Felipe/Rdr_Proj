import { Link } from "react-router-dom";
import HeaderInitial from "../../../Components/HeaderInitial/index";
import { useEffect, useState } from "react";
import "../Login/style.css";

const Index = () => {
  const [mostUser, setMostUser] = useState([]);
  const [button, setButton] = useState(true);

  const [formData, setFormData] = useState({
    nameUser: '',
    email: '',
    password: '',
    phone: '',
  });

  useEffect(() => {
    localStorage.setItem('mostrarUser', JSON.stringify(mostUser));
  }, [mostUser]);

  useEffect(() => {
    const mostrarUserStorage = localStorage.getItem('mostrarUser');
    if (mostrarUserStorage) {
      setMostUser(JSON.parse(mostrarUserStorage));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (formData.nameUser && formData.email && formData.password && formData.phone) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  function adicionarUsuario() {
    if (formData.nameUser && formData.email && formData.password && formData.phone) {
      setMostUser([...mostUser, formData]);
      setButton(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarUsuario();
    console.log(formData);
  };

  return (
    <div className="Dyeison1">
      <HeaderInitial />
      <div className="container-access">
        <div className="container-login">
          <div className="wrap-login">
            <form onSubmit={handleSubmit} className="login-form">
              <span className="login-form-title"> Bem vindo </span>
              <span className="login-form-title">
                <img src="/logo.png" alt="Logo RDR" />
              </span>
              <div className="wrap-input">
                <input
                  className={formData.nameUser !== "" ? "has-val input" : "input"}
                  type="text"
                  name="nameUser"
                  value={formData.nameUser}
                  onChange={handleChange}
                />
                <span className="focus-input" data-placeholder="Usuário"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={formData.email !== "" ? "has-val input" : "input"}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={formData.phone !== "" ? "has-val input" : "input"}
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <span className="focus-input" data-placeholder="Telefone"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={formData.password !== "" ? "has-val input" : "input"}
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>
              <div className="container-login-form-btn">
                <button
                  type="submit"
                  className="login-form-btn"
                  disabled={button}
                >
                  Cadastrar
                </button>
              </div>
              <div className="user">
                {mostUser.map((user, index) => (
                  <p key={index}>Usuário {user.nameUser} cadastrado com sucesso, faça seu login agora</p>
                ))}
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
