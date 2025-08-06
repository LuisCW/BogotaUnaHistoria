import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from './LanguageSelector';
import { translations } from './translations';
import emailjs from "emailjs-com";

// Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/modern.css";
import "./Diseño_Modal.css";

// Componentes modernos
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import InstagramGallery from './components/InstagramGallery';

// Componentes existentes mejorados
import LugaresModernos from './LugaresModernos';
import RecorridosModernos from './RecorridosModernos';
import HistoriaModerna from './HistoriaModerna';

function App() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  // Componente WhatsApp Button simple
  const WhatsAppButton = ({ isNearFooter }) => (
    <a
      href="https://wa.me/573243433200"
      className={`whatsapp-button ${isNearFooter ? 'near-footer' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contactWhatsApp || "Contactar por WhatsApp"}
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

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
        setTimeout(() => setIsSent(false), 5000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerHeight = footer.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        setIsNearFooter(scrollPosition >= documentHeight - footerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efecto de scroll suave para navegación
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in', 'visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {/* Navegación moderna */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Sección de Recorridos */}
      <section id="tours" className="py-5 bg-dark fade-in">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-warning">{t.nuestrosRecorridos || "Nuestros Recorridos"}</h2>
            <p className="lead text-light">
              {t.ourToursDesc || "Descubre la historia de Bogotá a través de experiencias únicas y auténticas"}
            </p>
          </div>
          <RecorridosModernos />
        </div>
      </section>

      {/* Sección de Lugares */}
      <section id="places" className="py-5 bg-black fade-in">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-warning">{t.lugaresEmblemáticos || "Lugares Emblemáticos"}</h2>
            <p className="lead text-light">
              {t.emblematicPlacesDesc || "Los sitios más importantes de nuestra ciudad capital"}
            </p>
          </div>
          <LugaresModernos />
        </div>
      </section>

      {/* Sección de Historia */}
      <section id="history" className="py-5 bg-dark fade-in">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-warning">{t.historiaYTradiciones || "Historia y Tradiciones"}</h2>
            <p className="lead text-light">
              {t.historiesDesc || "Conoce las historias fascinantes que han forjado nuestra identidad"}
            </p>
          </div>
          <HistoriaModerna />
        </div>
      </section>

      {/* Sección de Galería */}
      <section id="gallery" className="py-5 bg-black fade-in">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-warning">{t.galeriaFotografica || "Galería Fotográfica"}</h2>
            <p className="lead text-light">
              {t.galeriaFotograficaDesc || "Una colección visual de los lugares más emblemáticos de Bogotá"}
            </p>
          </div>
          <InstagramGallery />
        </div>
      </section>

      {/* Sección de Contacto Mejorada */}
      <section id="contact" className="py-5 bg-black fade-in" style={{ minHeight: '100vh', backgroundColor: '#000000 !important' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center mb-5">
                <h2 className="section-title text-warning">{t.contactanos || "Contáctanos"}</h2>
                <p className="lead text-light">
                  {t.contactDesc || "¿Listo para una experiencia histórica inolvidable? Escríbenos"}
                </p>
              </div>
              
              <div className="contact-form">
                {isSent && (
                  <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    <div>{t.success}</div>
                  </div>
                )}
                
                {isError && (
                  <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    <div>{t.error}</div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">
                        <i className="fas fa-user me-2"></i>{t.name}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        <i className="fas fa-envelope me-2"></i>{t.email}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tucorreo@ejemplo.com"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      <i className="fas fa-comment me-2"></i>{t.message}
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Cuéntanos sobre el recorrido que te interesa o cualquier pregunta que tengas..."
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning btn-lg px-5">
                      <i className="fas fa-paper-plane me-2"></i>
                      {t.send}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Información de contacto adicional */}
          <div className="row mt-5">
            <div className="col-md-4 text-center mb-4">
              <div className="contact-info-card p-4">
                <i className="fas fa-map-marker-alt fa-3x text-warning mb-3"></i>
                <h5 className="text-warning">{t.ubicacion || "Ubicación"}</h5>
                <p className="text-light">{t.direccionCompleta || "Plaza de Bolívar, La Candelaria"}<br />{t.ciudadPais || "Bogotá, Colombia"}</p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="contact-info-card p-4">
                <i className="fas fa-phone fa-3x text-warning mb-3"></i>
                <h5 className="text-warning">{t.telefono || "Teléfono"}</h5>
                <p className="text-light">
                  <a href="tel:+573243433200" className="text-light text-decoration-none">
                    {t.numeroTelefono || "+57 324 343 3200"}
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="contact-info-card p-4">
                <i className="fas fa-clock fa-3x text-warning mb-3"></i>
                <h5 className="text-warning">{t.horarios || "Horarios"}</h5>
                <p className="text-light">{t.horarioAtencion || "Lunes a Domingo"}<br />{t.horarioDetalle || "9:00 AM - 6:00 PM"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton isNearFooter={isNearFooter} />

      {/* Footer */}
      <Footer />

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </div>
  );
}

export default App;
