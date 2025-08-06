import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import { FaShareAlt } from "react-icons/fa";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { LanguageContext } from "./LanguageSelector";
import { translations } from "./translations";
import "./Diseño_Modal.css";

import Virgen from "./Historia/Virgen de la Candelaria origen de la celebración.jpeg";
import Septembrina from "./Historia/Dn5oTH5U4AEMQZN.jpg";
import Espeluco from "./Historia/8080466068_d5fce2e4e5_z.jpg";

Modal.setAppElement("#root");

const MAX_DESCRIPTION_LENGTH = 120;

const truncateDescription = (description) => {
  return description.length > MAX_DESCRIPTION_LENGTH
    ? description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
    : description;
};

function HistoriaModerna() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [modalIsOpen, setModalIsOpen] = useState({});
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const [activeFilter, setActiveFilter] = useState(t.all || "Todos");

  // Reset filter when language changes
  useEffect(() => {
    setActiveFilter(t.all || "Todos");
  }, [language, t.all]);

  const openModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: true });
    window.history.pushState({}, "", `?historia=${id}`);
  };

  const closeModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: false });
    window.history.pushState({}, "", window.location.pathname);
  };

  const openShareModal = (id) => {
    const shareUrl = `${window.location.origin}/?historia=${id}`;
    setShareLink(shareUrl);
    setShareModalIsOpen(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    setShowCopyTooltip(true);
    setTimeout(() => setShowCopyTooltip(false), 2000);
  };

  const historicalStories = [
    {
      id: 1,
      title: t.church || "Iglesia de la Candelaria",
      image: Virgen,
      description: t.storie1 || "Esta iglesia da nombre al barrio, construida en 1686 y dedicada a Nuestra Señora de las Candelas, que aparece en las Islas Canarias y es traída por los españoles; esta iglesia de Los Agustinos está muy ligada a la comunidad desde su inauguración oficial en 1703 hasta hoy. Fue restaurada aproximadamente en el año 2003; es una joya colonial que guarda muchas historias y secretos así como un patrimonio inmenso.",
      category: t.religioso || "Religioso",
      period: t.epocaColonial || "Época Colonial",
      year: "1686",
      icon: "fas fa-church"
    },
    {
      id: 2,
      title: t.septembrina || "La Noche Septembrina",
      image: Septembrina,
      description: t.storie2 || "El 25 de septiembre de 1828 ocurrió el atentado contra Bolívar, que marcaría un antes y un después en la vida del libertador y la historia la llamaría La Noche Septembrina; estos hechos se dan en el Palacio de San Carlos ubicado en la calle 10 con carrera 5, que fue sede de gobierno de La Gran Colombia desde el 22 de febrero de 1828. Bolívar como primer mandatario de la Gran Colombia residía en el Palacio, esa noche perpetraron dentro de su casa buscándolo para matarlo, es Manuelita Sáenz quien se da cuenta de lo que está pasando y le salva la vida a Bolívar haciéndolo saltar por la ventana de su habitación mientras ella distrae a los hombres que ingresaron al palacio.",
      category: t.historico || "Histórico",
      period: t.sigloXIX || "Siglo XIX",
      year: "1828",
      icon: "fas fa-mask"
    },
    {
      id: 3,
      title: t.leyenda || "La Leyenda del Espeluco de Las Aguas",
      image: Espeluco,
      description: t.storie3 || "Esta leyenda habla de una hermosa joven, de cabellos preciosos que vivía cerca de la Iglesia de Las Aguas en algún momento de la colonia, esta joven sabiéndose hermosa y querida dijo frente a varios testigos que su cabello era aún más hermoso que el de la Virgen del Rosario, virgen a la que está consagrada la ermita de La Señora de Las Aguas; quienes presenciaron ese acto de vanidad empezaron a regar la voz de que la hermosa joven, después de sus palabras desdeñosas, había sufrido un castigo divino, pues su cabello se había cubierto por cientos de serpientes y después de que la tierra se abriera a su alrededor, salieron dos demonios y se la llevaron. Nunca más se supo de la joven, solo hasta el momento en que se comenzó a ver la terrorífica aparición de una mujer terrorífica, que tenía serpientes en lugar de cabello. Hasta el día de hoy, muchos lugareños y transeúntes desprevenidos en horas de la madrugada de la parroquia de Las Aguas dicen haberse topado con ella.",
      category: t.leyendaCategory || "Leyenda",
      period: t.tradicionOral || "Tradición Oral",
      year: t.epocaColonial || "Época Colonial",
      icon: "fas fa-ghost"
    }
  ];

  const categories = [t.all || "Todos", ...new Set(historicalStories.map(story => story.category))];
  const filteredStories = activeFilter === (t.all || "Todos")
    ? historicalStories 
    : historicalStories.filter(story => story.category === activeFilter);

  return (
    <div className="historia-moderna">
      {/* Filtros de categorías */}
      <div className="tour-filters mb-5 text-center">
        <div className="btn-group flex-wrap" role="group">
          {categories.map(category => (
            <button 
              key={category} 
              className={`btn ${activeFilter === category ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de historias */}
      <div className="row g-4">
        {filteredStories.map(story => (
          <div key={story.id} className="col-lg-4 col-md-6">
            <div 
              className="card-custom h-100 tour-card clickable-card"
              onClick={() => openModal(story.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-img-container">
                <img
                  src={story.image}
                  className="card-img-top"
                  alt={story.title}
                />
                <div className="card-overlay">
                  <div className="card-overlay-content">
                    <h5 className="text-warning fw-bold">{story.title}</h5>
                    <p className="text-light mb-0">{story.period}</p>
                  </div>
                </div>
              </div>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="card-title text-warning fw-bold mb-0">{story.title}</h5>
                  <span className="badge bg-warning text-dark">{story.category}</span>
                </div>
                
                <p className="card-text text-light flex-grow-1">
                  {truncateDescription(story.description)}
                </p>
                
                <div className="story-details mb-3">
                  <div className="detail-item mb-2">
                    <i className={`${story.icon} text-warning me-2`}></i>
                    <small className="text-light">{story.category}</small>
                  </div>
                  <div className="detail-item mb-2">
                    <i className="fas fa-calendar text-warning me-2"></i>
                    <small className="text-light">{story.year}</small>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-clock text-warning me-2"></i>
                    <small className="text-light">{story.period}</small>
                  </div>
                </div>
                
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-warning flex-grow-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(story.id);
                    }}
                  >
                    <i className="fas fa-book-open me-2"></i>
                    {t.leerHistoria || "Leer Historia"}
                  </button>
                  <button 
                    className="btn btn-outline-warning"
                    onClick={(e) => {
                      e.stopPropagation();
                      openShareModal(story.id);
                    }}
                  >
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modales para cada historia */}
      {historicalStories.map(story => (
        <Modal
          key={`modal-${story.id}`}
          isOpen={modalIsOpen[story.id] || false}
          onRequestClose={() => closeModal(story.id)}
          className="modern-modal-dialog"
          overlayClassName="modern-modal-overlay"
        >
          <div className="custom-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{story.title}</h4>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => closeModal(story.id)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="modal-body">
                <div className="modal-layout">
                  {/* Sección de imagen */}
                  <div className="modal-image-section">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="modal-image"
                    />
                  </div>
                  
                  {/* Sección de información */}
                  <div className="modal-info-section">
                    <div className="info-content">
                      <div className="category-badge mb-3">
                        <span className="badge bg-warning text-dark">
                          <i className={`${story.icon} me-2`}></i>
                          {story.category}
                        </span>
                      </div>
                      
                      <div className="info-item">
                        <div className="info-icon">
                          <i className="fas fa-book-open"></i>
                        </div>
                        <div className="info-text">
                          <div className="info-label">{t.historia || "Historia"}</div>
                          <div className="info-value">{story.description}</div>
                        </div>
                      </div>
                      
                      <div className="info-grid">
                        <div className="info-item">
                          <div className="info-icon">
                            <i className="fas fa-clock"></i>
                          </div>
                          <div className="info-text">
                            <div className="info-label">{t.periodo || "Período"}</div>
                            <div className="info-value">{story.period}</div>
                          </div>
                        </div>
                        
                        <div className="info-item">
                          <div className="info-icon">
                            <i className="fas fa-calendar"></i>
                          </div>
                          <div className="info-text">
                            <div className="info-label">{t.año || "Año"}</div>
                            <div className="info-value">{story.year}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="price-highlight">
                        <i className="fas fa-history me-2"></i>
                        <span>{t.historiaDe || "Historia de"} {story.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                <div className="d-flex gap-3 w-100">
                  <button 
                    className="btn btn-outline-warning"
                    onClick={() => openShareModal(story.id)}
                  >
                    <FaShareAlt className="me-2" />
                    {t.compartir || "Compartir"}
                  </button>
                  <a 
                    href="#tours" 
                    className="btn btn-warning flex-grow-1"
                    onClick={() => closeModal(story.id)}
                  >
                    <i className="fas fa-route me-2"></i>
                    {t.verRecorridos || "Ver Recorridos"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ))}

      {/* Modal de compartir */}
      <Modal
        isOpen={shareModalIsOpen}
        onRequestClose={() => setShareModalIsOpen(false)}
        className="modal-dialog"
        overlayClassName="modal-overlay"
      >
        <div className="custom-modal share-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{t.compartirHistoria || "Compartir Historia"}</h4>
              <button 
                type="button" 
                className="btn-close"
                onClick={() => setShareModalIsOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="share-options">
                <FacebookShareButton url={shareLink}>
                  <div className="share-button">
                    <FacebookIcon size={40} round />
                    <span>Facebook</span>
                  </div>
                </FacebookShareButton>
                
                <WhatsappShareButton url={shareLink}>
                  <div className="share-button">
                    <WhatsappIcon size={40} round />
                    <span>WhatsApp</span>
                  </div>
                </WhatsappShareButton>
                
                <TwitterShareButton url={shareLink}>
                  <div className="share-button">
                    <TwitterIcon size={40} round />
                    <span>Twitter</span>
                  </div>
                </TwitterShareButton>
                
                <button className="share-button" onClick={copyToClipboard}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: '#ffd700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000'
                  }}>
                    <i className="fas fa-link"></i>
                  </div>
                  <span>{showCopyTooltip ? t.copiado || "¡Copiado!" : t.copiar || "Copiar"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* CTA Section */}
      <div className="cta-section text-center mt-5 p-5 bg-warning text-dark rounded">
        <h3 className="fw-bold mb-3">{t.moreHistoriesQuestion || "¿Quieres conocer más historias?"}</h3>
        <p className="mb-4">{t.joinThematicTours || "Únete a nuestros recorridos temáticos y descubre los secretos de Bogotá"}</p>
        <a href="#tours" className="btn btn-dark btn-lg">
          <i className="fas fa-route me-2"></i>
          {t.verRecorridos || "Ver Recorridos"}
        </a>
      </div>
    </div>
  );
}

export default HistoriaModerna;
