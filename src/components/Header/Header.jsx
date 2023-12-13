import "../../styles/Header.css";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

const Header = ({ currentlyPage, isLoggedTheUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const openMenu = () => {
    setIsOpen(!isOpen);
    document.querySelector('.body').classList.toggle('menu-open')
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
      <img src="" alt="Logo tarjetags" className="logo-tarjetags" />

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
      </nav>

      <div
        className={` sign-container ${!isLoggedTheUser ? "active" : ""} ${
          isOpen ? "open" : "" } `}
      >
        <div className="options-sign-container">
          <a href="/log-in" className="sign-option">
            Iniciar sesión
          </a>
          <a href="/sign-up" className="sign-option sign-up">
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
          <a href="" className="options-logged go-dashboard">
            Panel Principal
          </a>
          <a href="" className="options-logged user-profile">
            <img
              src="https://images.pexels.com/photos/16963436/pexels-photo-16963436/free-photo-of-a-woman-with-blue-hair-making-the-peace-sign.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User image profile"
              className="user-image-profile"
            />
          </a>
        </div>
      </div>

      <button className="menu-button" onClick={() => openMenu()}>
        <span className={` menu-button-line ${isOpen ? "active" : ""} `}></span>
        <span className={` menu-button-line ${isOpen ? "active" : ""} `}></span>
        <span className={` menu-button-line ${isOpen ? "active" : ""} `}></span>
      </button>
    </header>
  );
};

Header.propTypes = {
  currentlyPage: PropTypes.string.isRequired,
  isLoggedTheUser: PropTypes.bool.isRequired
}

export default Header;
