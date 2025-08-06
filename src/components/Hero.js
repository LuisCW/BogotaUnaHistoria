import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { LanguageContext } from '../LanguageSelector';
import { translations } from '../translations';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Importar imágenes
import Titulo from "../Titulo.png";
import Bogota1 from "../Fotos/bogota-22502_1280.jpg";
import Bogota2 from "../Fotos/bogota-54431_1280.jpg";
import Bogota3 from "../Fotos/bogota-54435_960_720.jpg";
import Bogota4 from "../Fotos/bogota-54436_1280.jpg";
import Bogota5 from "../Fotos/bogota-54437_960_720.jpg";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  
  return (
    <section id="home" className="hero-section">
      {/* Hero Principal */}
      <div className="hero-banner position-relative">
        <div className="hero-overlay"></div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="text-center text-white hero-content">
            <img 
              src={Titulo} 
              alt="Bogotá Una Historia Para Contar" 
              className="hero-logo mb-4 img-fluid"
            />
            <h1 className="display-4 fw-bold mb-4 text-warning">
              {t.heroTitle || "Descubre la Historia de Bogotá"}
            </h1>
            <p className="lead mb-4 fs-5">
              {t.heroSubtitle || "Recorridos históricos únicos por la capital de Colombia"}
            </p>
            <div className="hero-buttons">
              <a href="#tours" className="btn btn-warning btn-lg me-3 mb-2">
                <i className="fas fa-route me-2"></i>
                {t.viewTours || "Ver Recorridos"}
              </a>
              <a href="#contact" className="btn btn-outline-warning btn-lg mb-2">
                <i className="fas fa-phone me-2"></i>
                {t.contactUs || "Contactar"}
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <a href="#gallery" className="text-warning">
            <i className="fas fa-chevron-down fa-2x animate-bounce"></i>
          </a>
        </div>
      </div>

      {/* Galería Destacada */}
      <div className="featured-gallery py-5 bg-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h2 className="text-warning fw-bold mb-3">{t.bestOf || "Lo Mejor de Bogotá"}</h2>
              <p className="text-light lead">
                {t.heroDescription || "Explora los lugares más emblemáticos de nuestra ciudad capital a través de una experiencia visual única."}
              </p>
              <a href="#places" className="btn btn-outline-warning">
                {t.explorePlaces || "Explorar Lugares"}
                <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
            <div className="col-lg-8">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={4000}
                showThumbs={false}
                showStatus={false}
                className="hero-carousel"
              >
                <div className="carousel-item-hero">
                  <img src={Bogota1} alt="Avenida Jiménez" className="img-fluid" />
                  <div className="carousel-caption-custom">
                    <h5>{t.avenidaJimenez || "Avenida Jiménez"}</h5>
                    <p>{t.avenidaJimenezDesc || "Corazón histórico de la ciudad"}</p>
                  </div>
                </div>
                <div className="carousel-item-hero">
                  <img src={Bogota2} alt="Las Aguas" className="img-fluid" />
                  <div className="carousel-caption-custom">
                    <h5>{t.lasAguas || "Las Aguas"}</h5>
                    <p>{t.lasAguasDesc || "Barrio bohemio y cultural"}</p>
                  </div>
                </div>
                <div className="carousel-item-hero">
                  <img src={Bogota3} alt="Centro Histórico" className="img-fluid" />
                  <div className="carousel-caption-custom">
                    <h5>{t.centroHistorico || "Centro Histórico"}</h5>
                    <p>{t.centroHistoricoDesc || "Arquitectura colonial preservada"}</p>
                  </div>
                </div>
                <div className="carousel-item-hero">
                  <img src={Bogota4} alt="Chorro de Quevedo" className="img-fluid" />
                  <div className="carousel-caption-custom">
                    <h5>{t.chorroQuevedo || "Chorro de Quevedo"}</h5>
                    <p>{t.chorroQuevedoFoundation || "Lugar de fundación de Bogotá"}</p>
                  </div>
                </div>
                <div className="carousel-item-hero">
                  <img src={Bogota5} alt="La Candelaria" className="img-fluid" />
                  <div className="carousel-caption-custom">
                    <h5>{t.laCandelaria || "La Candelaria"}</h5>
                    <p>{t.laCandelariaDesc || "Patrimonio histórico nacional"}</p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section py-5 bg-warning">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="stat-item">
                <i className="fas fa-users fa-3x text-dark mb-3"></i>
                <h3 className="fw-bold text-dark">500+</h3>
                <p className="text-dark mb-0">{t.touristsSatisfied || "Turistas Satisfechos"}</p>
              </div>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="stat-item">
                <i className="fas fa-route fa-3x text-dark mb-3"></i>
                <h3 className="fw-bold text-dark">8</h3>
                <p className="text-dark mb-0">{t.uniqueTours || "Recorridos Únicos"}</p>
              </div>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="stat-item">
                <i className="fas fa-landmark fa-3x text-dark mb-3"></i>
                <h3 className="fw-bold text-dark">20+</h3>
                <p className="text-dark mb-0">{t.historicPlaces || "Lugares Históricos"}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <i className="fas fa-star fa-3x text-dark mb-3"></i>
                <h3 className="fw-bold text-dark">4.9</h3>
                <p className="text-dark mb-0">{t.averageRating || "Calificación Promedio"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
