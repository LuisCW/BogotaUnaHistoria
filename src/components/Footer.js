import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageSelector';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  
  return (
    <footer className="bg-black text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Información Principal */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-warning fw-bold mb-3">
              <i className="fas fa-landmark me-2"></i>
              Bogotá Una Historia
            </h5>
            <p className="mb-3">
              {t.footerDescription || "Descubre la historia fascinante de Bogotá a través de nuestros recorridos especializados por el centro histórico y lugares emblemáticos de la ciudad."}
            </p>
            <div className="d-flex">
              <a href="https://www.facebook.com/profile.php?id=100063748036232" target="_blank" rel="noopener noreferrer" className="text-warning me-3 fs-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/bogotaunahistoria" target="_blank" rel="noopener noreferrer" className="text-warning me-3 fs-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-warning fs-4">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-warning fw-bold mb-3">{t.quickLinks || "Enlaces Rápidos"}</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-light text-decoration-none hover-yellow">{t.inicio || "Inicio"}</a>
              </li>
              <li className="mb-2">
                <a href="#tours" className="text-light text-decoration-none hover-yellow">{t.recorridos || "Recorridos"}</a>
              </li>
              <li className="mb-2">
                <a href="#places" className="text-light text-decoration-none hover-yellow">{t.lugares || "Lugares"}</a>
              </li>
              <li className="mb-2">
                <a href="#history" className="text-light text-decoration-none hover-yellow">{t.historias || "Historia"}</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-light text-decoration-none hover-yellow">{t.contact || "Contacto"}</a>
              </li>
            </ul>
          </div>

          {/* Recorridos Populares */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="text-warning fw-bold mb-3">{t.popularTours || "Recorridos Populares"}</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button type="button" className="btn btn-link text-light text-decoration-none hover-yellow p-0">
                  <i className="fas fa-ghost me-2"></i>{t.ghostTourTitle || "Apariciones en La Candelaria"}
                </button>
              </li>
              <li className="mb-2">
                <button type="button" className="btn btn-link text-light text-decoration-none hover-yellow p-0">
                  <i className="fas fa-church me-2"></i>{t.churchTourTitle || "Iglesias que Hablan"}
                </button>
              </li>
              <li className="mb-2">
                <button type="button" className="btn btn-link text-light text-decoration-none hover-yellow p-0">
                  <i className="fas fa-mountain me-2"></i>{t.monserrateTourTitle || "Recorrido Monserrate"}
                </button>
              </li>
              <li className="mb-2">
                <button type="button" className="btn btn-link text-light text-decoration-none hover-yellow p-0">
                  <i className="fas fa-building me-2"></i>{t.historycenterTitle || "Centro Histórico"}
                </button>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="text-warning fw-bold mb-3">{t.contact || "Contacto"}</h6>
            <div className="contact-info">
              <p className="mb-2">
                <i className="fas fa-map-marker-alt text-warning me-2"></i>
                {t.footerAddress || "Plaza de Bolívar, La Candelaria"}<br />
                {t.footerCity || "Bogotá, Colombia"}
              </p>
              <p className="mb-2">
                <i className="fas fa-phone text-warning me-2"></i>
                <a href="tel:+573243433200" className="text-light text-decoration-none">
                  +57 324 343 3200
                </a>
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope text-warning me-2"></i>
                <a href="mailto:info@bogotaunahistoria.com" className="text-light text-decoration-none">
                  info@bogotaunahistoria.com
                </a>
              </p>
              <p className="mb-0">
                <i className="fas fa-clock text-warning me-2"></i>
                {t.footerSchedule || "Lun - Dom: 9:00 AM - 6:00 PM"}
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4 border-warning opacity-25" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-center text-md-start">
              © 2025 Bogotá Una Historia Para Contar. {t.rights || "Todos los derechos reservados."}</p>
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-end">
              <small className="text-muted">
                {t.footerCredits || "Desarrollado con ❤️ para preservar la historia de Bogotá"}
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
