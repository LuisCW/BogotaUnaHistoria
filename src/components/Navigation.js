import React, { useState, useContext } from 'react';
import LanguageSelector from '../LanguageSelector';
import { LanguageContext } from '../LanguageSelector';
import { translations } from '../translations';
import Titulo from '../Titulo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img 
            src={Titulo} 
            alt="Bogotá Una Historia Para Contar" 
            className="navbar-logo"
          />
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link hover-yellow" href="#home">{t.inicio || "Inicio"}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-yellow" href="#tours">{t.recorridos || "Recorridos"}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-yellow" href="#places">{t.lugares || "Lugares"}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-yellow" href="#history">{t.historias || "Historia"}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-yellow" href="#gallery">{t.gallery || "Galería"}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-yellow" href="#contact">{t.contact || "Contacto"}</a>
            </li>
          </ul>
          
          <div className="d-flex align-items-center">
            <LanguageSelector />
            <div className="social-icons ms-3 d-none d-lg-flex">
              <a href="https://www.facebook.com/profile.php?id=100063748036232" target="_blank" rel="noopener noreferrer" className="text-warning mx-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/bogotaunahistoria" target="_blank" rel="noopener noreferrer" className="text-warning mx-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-warning mx-2">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
