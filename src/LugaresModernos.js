import React, { useState, useContext } from "react";
import Modal from "react-modal";
import {
  FaMapMarkerAlt,
  FaShareAlt,
} from "react-icons/fa";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import { LanguageContext } from "./LanguageSelector";
import { translations } from "./translations";

import "./Diseño_Modal.css";

// Imágenes propias de Lugares
import Catedral from "./Fotos/bolivar-park-96124_1280.jpg";
import Monserrate from "./Fotos/bogota-4072371_1280.jpg";
import Manzana from "./Fotos/Colegio_Mayor_de_San_Bartolome.png";
import Palacio from "./Fotos/fachasa_4_copia_copia2_copia_copia_0.jpg";
import Teatro from "./Fotos/archivo_instituto_distrital_de_turismo_12.jpg";
import Chorro from "./Fotos/vista-geral-da-plazoleta.jpg";
import Oro from "./Fotos/65_Bogotá_Museo_del_Oro_CVV6236_Retocada.jpg";
import Bogota from "./Fotos/Museo_de_Bogota.jpeg";
import Botero from "./Fotos/Lascar_Museo_Botero_(4587575468).jpg";

Modal.setAppElement("#root");

const MAX_DESCRIPTION_LENGTH = 120;
const truncateDescription = (description) => {
  return description.length > MAX_DESCRIPTION_LENGTH
    ? description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
    : description;
};

function LugaresModernos() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [modalIsOpen, setModalIsOpen] = useState({});
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);

  const openModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: true });
    window.history.pushState({}, "", `?lugares=${id}`);
  };

  const closeModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: false });
    window.history.pushState({}, "", window.location.pathname);
  };

  const generateShareLink = (id) => {
    return `${window.location.origin}/?lugares=${id}`;
  };

  const openShareModal = (id, item) => {
    const shareUrl = generateShareLink(id);
    setShareLink(shareUrl);
    setShareModalIsOpen(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    setShowCopyTooltip(true);
    setTimeout(() => setShowCopyTooltip(false), 2000);
  };

  // Datos únicos para Lugares
  const attractions = [
    {
      id: 1,
      title: t.catedralPrimadaTitle || "Catedral Primada",
      image: Catedral,
      description: t.catedralPrimadaShort || "La Catedral Primada de Bogotá es el principal templo católico de la capital colombiana y sede de la Arquidiócesis de Bog...",
      location: t.cathedralLocation || "Plaza de Bolívar",
      category: t.religioso || "Religioso",
      yearBuilt: "1807-1823"
    },
    {
      id: 2,
      title: t.monserrateShortTitle || "Cerro de Monserrate",
      image: Monserrate,
      description: t.monserrateShort || "El cerro tutelar de Bogotá, con su santuario del Señor de Monserrate y una vista panorámica incomparable de la ciudad.",
      location: t.monserrateShortLocation || "Cordillera Oriental",
      category: t.natural || "Natural",
      yearBuilt: "1640"
    },
    {
      id: 3,
      title: t.manzanaJesuiticaTitle || "Manzana Jesuítica",
      image: Manzana,
      description: t.manzanaJesuiticaShort || "Conjunto arquitectónico colonial que alberga el Colegio Mayor de San Bartolomé y la Universidad Javeriana.",
      location: t.laCandelaria || "La Candelaria",
      category: t.educativo || "Educativo",
      yearBuilt: "1604"
    },
    {
      id: 4,
      title: t.palacioLievanoTitle || "Palacio de Liévano",
      image: Palacio,
      description: t.palacioLievanoDesc || "Sede de la Alcaldía Mayor de Bogotá, un hermoso edificio de estilo francés que preside la Plaza de Bolívar.",
      location: t.palacioLievanoLocation || "Plaza de Bolívar",
      category: t.institucional || "Institucional",
      yearBuilt: "1902-1905"
    },
    {
      id: 5,
      title: t.colonTheaterTitle || "Teatro Colón",
      image: Teatro,
      description: t.teatroColonShort || "El teatro más importante de Colombia, epicentro de la vida cultural bogotana desde principios del siglo XX.",
      location: t.laCandelaria || "La Candelaria",
      category: t.cultural || "Cultural",
      yearBuilt: "1885-1892"
    },
    {
      id: 6,
      title: t.chorroQuevedoTitle || "Chorro de Quevedo",
      image: Chorro,
      description: t.chorroQuevedoShort || "Plazoleta donde según la tradición se fundó Bogotá en 1538, corazón histórico de La Candelaria.",
      location: t.laCandelaria || "La Candelaria",
      category: t.historico || "Histórico",
      yearBuilt: "1538"
    },
    {
      id: 7,
      title: t.goldMuseumTitle || "Museo del Oro",
      image: Oro,
      description: t.goldMuseumShort || "La colección de orfebrería prehispánica más importante del mundo, con más de 55,000 piezas de oro.",
      location: t.laCandelaria || "La Candelaria",
      category: t.museo || "Museo",
      yearBuilt: "1968"
    },
    {
      id: 8,
      title: t.bogotaMuseumTitle || "Museo de Bogotá",
      image: Bogota,
      description: t.bogotaMuseumShort || "Dedicado a la historia de la ciudad, ubicado en una hermosa casona colonial restaurada.",
      location: t.laCandelaria || "La Candelaria",
      category: t.museo || "Museo",
      yearBuilt: "1969"
    },
    {
      id: 9,
      title: t.boteroMuseumTitle || "Museo Botero",
      image: Botero,
      description: t.boteroMuseumShort || "Museo que alberga la colección de arte donada por Fernando Botero, incluyendo obras propias y de artistas internacionale...",
      location: t.laCandelaria || "La Candelaria",
      category: t.museo || "Museo",
      yearBuilt: "2000"
    }
  ];

  return (
    <div className="lugares-modernos">
      <div className="row g-4">
        {attractions.map((place) => (
          <div key={place.id} className="col-lg-4 col-md-6">
            <div 
              className="card-custom h-100 tour-card clickable-card" 
              onClick={() => openModal(place.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-img-container">
                <img
                  src={place.image}
                  className="card-img-top"
                  alt={place.title}
                />
                <div className="card-overlay">
                  <div className="card-overlay-content">
                    <h5 className="text-warning fw-bold">{place.title}</h5>
                    <p className="text-light mb-0">{place.category}</p>
                  </div>
                </div>
              </div>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="card-title text-warning fw-bold mb-0">{place.title}</h5>
                  <span className="badge bg-warning text-dark">{place.category}</span>
                </div>
                
                <p className="card-text text-light flex-grow-1">
                  {truncateDescription(place.description)}
                </p>
                
                <div className="place-details mb-3">
                  <div className="detail-item mb-2">
                    <FaMapMarkerAlt className="text-warning me-2" />
                    <small className="text-light">{place.location}</small>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-calendar text-warning me-2"></i>
                    <small className="text-light">{t.fundado || "Fundado:"} {place.yearBuilt}</small>
                  </div>
                </div>
                
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-warning flex-grow-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(place.id);
                    }}
                  >
                    <i className="fas fa-info-circle me-2"></i>
                    {t.verDetalles || "Ver Detalles"}
                  </button>
                  <button 
                    className="btn btn-outline-warning"
                    onClick={(e) => {
                      e.stopPropagation();
                      openShareModal(place.id, place);
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

      {/* Modales */}
      {attractions.map((place) => (
        <Modal
          key={`modal-${place.id}`}
          isOpen={modalIsOpen[place.id] || false}
          onRequestClose={() => closeModal(place.id)}
          className="modern-modal-dialog"
          overlayClassName="modern-modal-overlay"
        >
          <div className="custom-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{place.title}</h4>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => closeModal(place.id)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="modal-body">
                <div className="modal-layout">
                  {/* Sección de imagen */}
                  <div className="modal-image-section">
                    <img 
                      src={place.image} 
                      alt={place.title}
                      className="modal-image"
                    />
                  </div>
                  
                  {/* Sección de información */}
                  <div className="modal-info-section">
                    <div className="info-content">
                      <div className="category-badge mb-3">
                        <span className="badge bg-warning text-dark">
                          <i className="fas fa-building me-2"></i>
                          {place.category}
                        </span>
                      </div>
                      
                      <div className="info-item">
                        <div className="info-icon">
                          <i className="fas fa-info-circle"></i>
                        </div>
                        <div className="info-text">
                          <div className="info-label">{t.descripcion || "Descripción"}</div>
                          <div className="info-value">{place.description}</div>
                        </div>
                      </div>
                      
                      <div className="info-grid">
                        <div className="info-item">
                          <div className="info-icon">
                            <FaMapMarkerAlt />
                          </div>
                          <div className="info-text">
                            <div className="info-label">Ubicación</div>
                            <div className="info-value">{place.location}</div>
                          </div>
                        </div>
                        
                        <div className="info-item">
                          <div className="info-icon">
                            <i className="fas fa-calendar"></i>
                          </div>
                          <div className="info-text">
                            <div className="info-label">{t.añoFundacion || "Año de Fundación"}</div>
                            <div className="info-value">{place.yearBuilt}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="price-highlight">
                        <i className="fas fa-landmark me-2"></i>
                        <span>{t.lugarDe || "Lugar de"} {place.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                <div className="d-flex gap-3 w-100">
                  <button 
                    className="btn btn-outline-warning"
                    onClick={() => openShareModal(place.id, place)}
                  >
                    <FaShareAlt className="me-2" />
                    {t.compartir || "Compartir"}
                  </button>
                  <a 
                    href="#tours" 
                    className="btn btn-warning flex-grow-1"
                    onClick={() => closeModal(place.id)}
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
        className="modern-modal-dialog"
        overlayClassName="modern-modal-overlay"
      >
        <div className="custom-modal share-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{t.compartirLugar || "Compartir Lugar"}</h4>
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
    </div>
  );
}

export default LugaresModernos;
