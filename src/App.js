import React, { useState, useEffect, useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import LanguageSelector from './LanguageSelector';
import { LanguageContext } from './LanguageSelector';
import { translations } from './translations';
import { useSEO, SEO_DEFAULTS } from './hooks/useSEO';
import SchemaMarkup from './components/SchemaMarkup';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import Modal from "react-modal";
import Lugares from './Lugares';
import Recorridos from './Recorridos';
import Historia from './Historia';

//Imagenes
import Titulo from "./Titulo.png";
import Bogota1 from "./Fotos/bogota-22502_1280.jpg";
import Bogota2 from "./Fotos/bogota-54431_1280.jpg";
import Bogota3 from "./Fotos/bogota-54435_960_720.jpg";
import Bogota4 from "./Fotos/bogota-54436_1280.jpg";
import Bogota5 from "./Fotos/bogota-54437_960_720.jpg";
import Bogota6 from "./Fotos/bogota-221346_960_720.jpg";
import Bogota7 from "./Fotos/bogota-2839331_1280.jpg";
import Bogota8 from "./Fotos/bogota-3654051_1280.jpg";
import Bogota9 from "./Fotos/bogota-4072310_1280.jpg";
import Bogota10 from "./Fotos/bogota-4072351_960_720.jpg";
import Bogota11 from "./Fotos/bogota-4072368_1280.jpg";
import Bogota12 from "./Fotos/bogota-4072371_1280.jpg";
import Bogota13 from "./Fotos/bogota-4289714_960_720.jpg";
import Bogota14 from "./Fotos/bogota-4489562_960_720.jpg";
import Bogota15 from "./Fotos/bolivar-park-96124_1280.jpg";
import Bogota16 from "./Fotos/buildings-6069752_1280.jpg";
import Bogota17 from "./Fotos/chapel-405205_960_720.jpg";
import Bogota18 from "./Fotos/city-4457801_1280.jpg";
import Bogota19 from "./Fotos/city-6069750_960_720.jpg";
import Bogota20 from "./Fotos/colombia-2434911_1280.jpg";

import "./App.css";

function App() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  Modal.setAppElement("#root");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qjc290k",
        "template_06syv7j",
        formData,
        "IW_x3hLdQyY_KHdAu"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsSent(true);
        setIsError(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsError(true);
      });
  };
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = document.querySelector("footer").offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if the scroll position is near the bottom of the page, minus the footer height
      if (scrollPosition >= documentHeight - footerHeight) {
        setIsNearFooter(true);
      } else {
        setIsNearFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // SEO dinámico basado en el idioma
  useSEO({
    title: language === 'es' 
      ? 'Bogotá Una Historia - Recorridos Históricos por la Capital de Colombia'
      : 'Bogotá Una Historia - Historical Tours through Colombia\'s Capital',
    description: language === 'es'
      ? 'Descubre la historia fascinante de Bogotá a través de recorridos únicos por La Candelaria, Monserrate y lugares emblemáticos. Tours históricos especializados en el centro histórico de Bogotá, Colombia.'
      : 'Discover the fascinating history of Bogotá through unique tours of La Candelaria, Monserrate and emblematic places. Specialized historical tours in the historic center of Bogotá, Colombia.',
    keywords: language === 'es'
      ? 'recorridos históricos Bogotá, tours La Candelaria, turismo histórico Colombia, guías turísticos Bogotá, Monserrate, centro histórico, Plaza de Bolívar, historia colombiana, patrimonio cultural'
      : 'historical tours Bogotá, La Candelaria tours, historical tourism Colombia, tourist guides Bogotá, Monserrate, historic center, Bolívar Square, Colombian history, cultural heritage',
    image: SEO_DEFAULTS.DEFAULT_IMAGE,
    url: SEO_DEFAULTS.SITE_URL,
    locale: language === 'es' ? 'es_CO' : 'en_US'
  });
  
  return (
    <div className="App">
      {/* Schema Markup para SEO */}
      <SchemaMarkup type="organization" />
      <SchemaMarkup 
        type="webpage" 
        data={{
          title: language === 'es' 
            ? 'Bogotá Una Historia - Recorridos Históricos por la Capital de Colombia'
            : 'Bogotá Una Historia - Historical Tours through Colombia\'s Capital',
          description: language === 'es'
            ? 'Descubre la historia fascinante de Bogotá a través de recorridos únicos por La Candelaria, Monserrate y lugares emblemáticos.'
            : 'Discover the fascinating history of Bogotá through unique tours of La Candelaria, Monserrate and emblematic places.',
          url: SEO_DEFAULTS.SITE_URL
        }} 
      />
      
      <header className="bg-success text-white py-5 header">
        <div className="container text-center">
          <img
            src={Titulo}
            alt="Bogotá Una Historia Para Contar - Recorridos Históricos por Bogotá"
            height="100px"
            width="auto"
          />
          <h1>{t.explore}</h1>
          <nav className="social-icons mt-3" aria-label="Redes Sociales">
            <a
              href="https://www.facebook.com/profile.php?id=100063748036232"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
              aria-label="Síguenos en Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/bogotaunahistoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
              aria-label="Síguenos en YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <LanguageSelector/>
          </nav>
        </div>
      </header>

      <div
        className="whatsapp-button"
        style={{
          bottom: isNearFooter
            ? `calc(${document.querySelector("footer").offsetHeight}px + 20px)`
            : "20px",
        }}
      >
        <a
          href="https://wa.me/573243433200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <section className="my-5">
        <h2 className="text-center">{t.bestOf}</h2>
        <div className="container carousel-container">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            className="carousel"
            showThumbs={true}
          >
            <div className="img-container bg-dark">
              <img
                src={Bogota1}
                alt="Avenida Jímenez"
                className="img-fluid  "
              />
              <p className="legend">{t.avenidaJimenez}</p>
            </div>
            <div className="img-container bg-dark">
              <img src={Bogota2} alt="Las Aguas" className="img-fluid  " />
              <p className="legend">{t.lasAguas}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota3}
                alt="Centro Historico"
                className="img-fluid  "
              />
              <p className="legend">{t.centroHistorico}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota4}
                alt="Chorro de Quevedo"
                className="img-fluid  "
              />
              <p className="legend">{t.chorroQuevedo}</p>
            </div>
            <div className="img-container bg-dark">
              <img src={Bogota5} alt="La Candelaria" className="img-fluid  " />
              <p className="legend">{t.laCandelaria}</p>
            </div>
            <div className="img-container bg-dark">
              <img src={Bogota6} alt="Santa Fe" className="img-fluid  " />
              <p className="legend">{t.santaFe}</p>
            </div>
            <div className="img-container bg-dark">
              <img src={Bogota7} alt="City U" className="img-fluid" />
              <p className="legend">{t.cityU}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota8}
                alt="Palacio de Lievano - Plaza de Bolivar"
                className="img-fluid"
              />
              <p className="legend">{t.palacioLievano}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota9}
                alt="Palacio de Nariño - Plaza de Bolivar"
                className="img-fluid"
              />
              <p className="legend">{t.palacioNarino}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota10}
                alt="Centro Historico - La Candelaria"
                className="img-fluid"
              />
              <p className="legend">{t.centroHistoricoCandelaria}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota11}
                alt="Centro de Bogotá - Vista Aerea"
                className="img-fluid"
              />
              <p className="legend">{t.centroBogota}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota12}
                alt="Santuario de Monserrate"
                className="img-fluid"
              />
              <p className="legend">{t.santuarioMonserrate}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota13}
                alt="Primera escuela de Bogotá"
                className="img-fluid"
              />
              <p className="legend">{t.primeraEscuela}</p>
            </div>
            <div className="img-container bg-dark">
              <img src={Bogota14} alt="Alcaldía" className="img-fluid" />
              <p className="legend">{t.alcaldia}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota15}
                alt="Catedral Primada"
                className="img-fluid"
              />
              <p className="legend">{t.catedralPrimada}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota16}
                alt="Centro Historico - Las Aguas"
                className="img-fluid"
              />
              <p className="legend">{t.centroHistoricoAguas}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota17}
                alt="Campanario de Monserrate"
                className="img-fluid"
              />
              <p className="legend">{t.campanarioMonserrate}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota18}
                alt="Centro Internacional de Bogotá - Vista Aerea"
                className="img-fluid"
              />
              <p className="legend">
              {t.centroInternacional}
              </p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota19}
                alt="Iglesia de San Ignacio"
                className="img-fluid"
              />
              <p className="legend">{t.iglesiaSanIgnacio}</p>
            </div>
            <div className="img-container bg-dark">
              <img
                src={Bogota20}
                alt="La Candelaria Colorida"
                className="img-fluid"
              />
              <p className="legend">{t.candelariaColorida}</p>
            </div>
          </Carousel>
        </div>
      </section>
      
      <main>
        <section id="recorridos" aria-label="Recorridos Turísticos">
          <Recorridos />
        </section>
        
        <section id="lugares" aria-label="Lugares Emblemáticos">
          <Lugares />
        </section>
        
        <section id="historias" aria-label="Historia y Tradiciones">
          <Historia />
        </section>
      </main>

      <section id="contacto" className="my-5" aria-label="Contacto">
        <h2 className="text-center">{t.contact}</h2>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                {t.name}
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                {t.email}
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                {t.message}
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              {t.send}
            </button>
            {isSent && (
              <div className="alert alert-success mt-3">
                {t.success}
              </div>
            )}
            {isError && (
              <div className="alert alert-danger mt-3">
                {t.error}
              </div>
            )}
          </form>
        </div>
      </section>
      <footer className="bg-success text-white py-3 footer">
        <div className="container text-center">
          <div className="social-icons mb-3">
            <a
              href="https://www.facebook.com/profile.php?id=100063748036232"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/bogotaunahistoria/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p>
            &copy; 2025 Bogotá Una Historia Para Contar. {t.rights}.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
