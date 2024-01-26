import "../../styles/Header.css";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import logo from '../../assets/logoTarjetags.png';
import { linkHome, linkLogin, linkRegister } from "../../utils/Links";

const Header = ({ currentlyPage, isLoggedTheUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'fix-header' : ''}`}>
      <div className="container header">
      <img src={logo} alt="Logo tarjetags" className="logo-tarjetags" />

      <nav className={` menu ${isOpen ? "active" : ""} `}>
        <a
          href="/"
          className={`menu-option ${currentlyPage === "home" ? "active" : ""}`}
        >
          Inicio
        </a>
        <a
          href="/plans"
          className={`menu-option ${currentlyPage === "plans" ? "active" : ""}`}
        >
          Planes
        </a>
        <a
          href="/faq"
          className={`menu-option ${currentlyPage === "faq" ? "active" : ""}`}
        >
          Faq
        </a>

        <div className="login-options">
          {isLoggedTheUser? (<> <a href={linkHome} className="options-logged go-dashboard button-nav">
            Panel Principal
          </a>
          </>)
              :(<><a href={linkLogin} className="sign-option">
                  Iniciar sesión
                </a>
                <a href={linkRegister} className="sign-option border-button">
                  Registrarse
                </a></>)}
        </div>
        
      </nav>

      <div className={` sign-container ${!isLoggedTheUser ? "active" : ""} ${
          isOpen ? "open" : "" } `}
        >
        <div className="options-sign-container">
          <a href={linkLogin} className="sign-option button-nav" >
            Iniciar sesión
          </a>
          <a href={linkRegister} className="sign-option sign-up button-nav">
            Registrarse
          </a>
        </div>
      </div>

      <div
        className={` logged-container ${isLoggedTheUser ? "active" : ""}  ${
          isOpen ? "open" : ""
        } `}
      >
        <div className="option-logged-container">
          <a href={linkHome} className="options-logged go-dashboard">
            Panel Principal
          </a>
          
        </div>
      </div>

      <button className="menu-button" onClick={() => openMenu()}>
        <span className={` menu-button-line ${isOpen ? "active" : ""} `}></span>
        <span className={` menu-button-line ${isOpen ? "active" : ""} `}></span>
        <span className={` menu-button-line ${isOpen ? "active" : ""} `}></span>
      </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  currentlyPage: PropTypes.string.isRequired,
  isLoggedTheUser: PropTypes.bool.isRequired
}

export default Header;
