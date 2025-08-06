import React, { useState, useContext } from "react";
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

// Importar flyers
import flyer1 from "./Flayers/Blue Yellow Modern Travel Agent Flyer.png";
import flyer2 from "./Flayers/Historia agencia turismo moderno marrón.png";
import flyer3 from "./Flayers/Flayer.png";
import flyer4 from "./Flayers/ok (2).png";
import flyer5 from "./Flayers/Orange Black Dark and Trendy Online Event Business Halloween Flyer.png";
import flyer6 from "./Flayers/Red and White Modern Christmas Party Invitation (2).png";

Modal.setAppElement("#root");

const RecorridosModernos = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [modalIsOpen, setModalIsOpen] = useState({});
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const openModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: true });
  };

  const closeModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: false });
  };

  const openShareModal = (id) => {
    const shareUrl = `${window.location.origin}/?recorrido=${id}`;
    setShareLink(shareUrl);
    setShareModalIsOpen(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    setShowCopyTooltip(true);
    setTimeout(() => setShowCopyTooltip(false), 2000);
  };

  const tours = [
    {
      id: 1,
      title: t.ghostTourTitle || "Apariciones y espantos en La Candelaria",
      shortDesc: "Historias sobrenaturales",
      description: t.ghostTourDesc || "Recorrido histórico temático realizado en el centro histórico de La Candelaria donde se narran historias y leyendas de apariciones y fantasmas dentro de un contexto histórico y de tradición Oral",
      location: t.ghostTourLocation || "Universidad del Rosario Calle 12C #6-25",
      date: t.ghostTourDate || "Sábado 5pm",
      price: t.voluntaryPrice || "Aporte Voluntario",
      image: flyer5,
      category: "tematico",
      icon: "fas fa-ghost"
    },
    {
      id: 2,
      title: t.churchTourTitle || "Iglesias que hablan",
      shortDesc: "Arquitectura religiosa",
      description: t.churchTourDesc || "Recorrido histórico temático sobre iglesias ubicadas en el Centro histórico de La Candelaria donde se habla acerca de su historia, arquitectura, y datos curiosos",
      location: t.churchTourLocation || "Iglesia de Las Aguas",
      date: t.churchTourDate || "Domingo 9:30am",
      price: t.voluntaryPrice || "Aporte Voluntario",
      image: flyer2,
      category: "cultural",
      icon: "fas fa-church"
    },
    {
      id: 3,
      title: t.hiddenHistoryTitle || "Historias detrás de la historia",
      shortDesc: "Secretos de la ciudad",
      description: t.hiddenHistoryDesc || "Recorrido histórico temático realizado en el Centro Histórico de La Candelaria, dónde se narra la historia, datos curiosos y/o ocultos de lugares y personajes de la historia capitalina",
      location: t.hiddenHistoryLocation || "Plaza de Bolívar",
      date: t.hiddenHistoryDate || "Sábado 2pm",
      price: t.price2 || "Desde $20.000 COP",
      image: flyer3,
      category: "historico",
      icon: "fas fa-search"
    },
    {
      id: 4,
      title: t.historycenterTitle || "Recorrido Centro Histórico",
      shortDesc: "Experiencia guiada",
      description: t.historycenterDesc || "Recorrido totalmente personalizado dirigido a visitantes extranjeros realizado en el Centro Histórico de La Candelaria mediante el cuál se le entrega al turista una experiencia llena de cultura y patrimonio, sobre la ciudad colonial y la Bogotá contemporánea",
      location: t.historycenterLocation || "Plaza de Bolívar",
      date: t.historycenterDate || "Solicita fecha y hora",
      price: t.price3 || "20 USD, con descuentos desde el 2do participante",
      image: flyer1,
      category: "turistico",
      icon: "fas fa-building"
    },
    {
      id: 5,
      title: t.monserrateTourTitle || "Recorrido Monserrate",
      shortDesc: "Cerro sagrado",
      description: t.monserrateTourDesc || "Recorrido totalmente personalizado dirigido a visitantes extranjeros realizado en Monserrate en donde el turista podrá además de visitar el cerro y disfrutar la panorámica de la ciudad, también conocer la historia del Santuario y otros lugares",
      location: t.monserrateTourLocation || "Entrada subida Cerro de Monserrate",
      date: t.monserrateTourDate || "Solicita fecha y hora",
      price: t.Price4 || "35 USD, con descuentos desde el 2do participante",
      image: flyer1,
      category: "turistico",
      icon: "fas fa-mountain"
    },
    {
      id: 6,
      title: t.combinedTourTitle || "Recorrido Centro Histórico y Monserrate",
      shortDesc: "Experiencia completa",
      description: t.combinedTourDesc || "Recorrido totalmente personalizado dirigido a visitantes extranjeros realizado en Monserrate y en el Centro Histórico en donde el turista podrá además de visitar el cerro y disfrutar la panorámica de la ciudad, también conocer la historia del Santuario y otros lugares. En La Candelaria se le entrega al turista una experiencia llena de cultura y patrimonio, sobre la ciudad colonial y la Bogotá contemporánea",
      location: t.combinedTourLocation || "Entrada subida Cerro de Monserrate",
      date: t.combinedTourDate || "Solicita fecha y hora", 
      price: t.Price5 || "45 USD, con descuentos desde el 2do participante",
      image: flyer4,
      category: "turistico",
      icon: "fas fa-route"
    },
    {
      id: 7,
      title: t.christmasTourTitle || "Especial Navidad",
      shortDesc: "Tradiciones navideñas",
      description: t.christmasTourDesc || "Recorrido histórico temático especial de navidad realizado en el centro histórico de La Candelaria donde se narran historias navideñas y de tradiciones de la época en La Candelaria",
      location: t.christmasTourLocation || "Plaza de Bolívar",
      date: t.christmasTourDate || "Viernes y Sábado de Diciembre y hasta el 6 de Enero",
      price: t.Price6 || "Desde $15.000 COP",
      image: flyer6,
      category: "especial",
      icon: "fas fa-tree"
    },
    {
      id: 8,
      title: t.womanTourTitle || "Mujeres en SantaFé y Bogotá",
      shortDesc: "Historia femenina",
      description: t.womanTourDesc || "En el cuál se narran por algunas calles de la Candelaria no solamente historias de mujeres durante la colonia e inicios del S. XX sino como era la vida cotidiana, familiar, conventual y política de las mujeres unos siglos atrás",
      location: t.womanTourLocation || "Plaza de Bolívar",
      date: t.womanTourDate || "Viernes 6pm",
      price: t.voluntaryPrice || "Aporte Voluntario",
      image: flyer2,
      category: "cultural",
      icon: "fas fa-venus"
    }
  ];

  // Function to translate category keys to display names
  const getCategoryName = (categoryKey) => {
    switch(categoryKey) {
      case "historico": return t.categoryHistorico || "Histórico";
      case "turistico": return t.categoryTuristico || "Turístico";
      case "especial": return t.categoryEspecial || "Especial";
      case "tematico": return t.categoryTematico || "Temático";
      case "cultural": return t.categoryCultural || "Cultural";
      default: return categoryKey;
    }
  };

  // Get unique category keys and translate them for display
  const uniqueCategoryKeys = [...new Set(tours.map(tour => tour.category))];
  const categories = [
    { key: "all", name: t.all || "Todos" },
    ...uniqueCategoryKeys.map(key => ({ key, name: getCategoryName(key) }))
  ];
  
  const filteredTours = activeFilter === "all" 
    ? tours 
    : tours.filter(tour => tour.category === activeFilter);

  return (
    <div className="recorridos-modernos">
      {/* Filtros de categorías */}
      <div className="tour-filters mb-5 text-center">
        <div className="btn-group flex-wrap" role="group">
          {categories.map(category => (
            <button 
              key={category.key} 
              className={`btn ${activeFilter === category.key ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={() => setActiveFilter(category.key)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de tours */}
      <div className="row g-4">
        {filteredTours.map(tour => (
          <div key={tour.id} className="col-lg-4 col-md-6">
            <div 
              className="card-custom h-100 tour-card clickable-card" 
              onClick={() => openModal(tour.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-img-container">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="card-flyer-image"
                />
                <div className="card-overlay">
                  <div className="card-overlay-content">
                    <h5 className="text-warning fw-bold">{tour.title}</h5>
                    <p className="text-light mb-0">{tour.shortDesc}</p>
                  </div>
                </div>
              </div>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="card-title text-warning fw-bold mb-0">{tour.title}</h5>
                  <span className="badge bg-warning text-dark">{getCategoryName(tour.category)}</span>
                </div>
                
                <p className="card-text text-light flex-grow-1">
                  {tour.description.length > 120 
                    ? tour.description.substring(0, 120) + "..." 
                    : tour.description}
                </p>
                
                <div className="tour-details mb-3">
                  <div className="detail-item mb-2">
                    <i className="fas fa-map-marker-alt text-warning me-2"></i>
                    <small className="text-light">{tour.location}</small>
                  </div>
                  <div className="detail-item mb-2">
                    <i className="fas fa-calendar text-warning me-2"></i>
                    <small className="text-light">{tour.date}</small>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-tag text-warning me-2"></i>
                    <small className="text-warning fw-bold">{tour.price}</small>
                  </div>
                </div>
                
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-warning flex-grow-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(tour.id);
                    }}
                  >
                    <i className="fas fa-info-circle me-2"></i>
                    {t.moreInfo || "Más Info"}
                  </button>
                  <button 
                    className="btn btn-outline-warning"
                    onClick={(e) => {
                      e.stopPropagation();
                      openShareModal(tour.id);
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

      {/* Modales para cada tour */}
      {tours.map(tour => (
        <Modal
          key={`modal-${tour.id}`}
          isOpen={modalIsOpen[tour.id] || false}
          onRequestClose={() => closeModal(tour.id)}
          className="modern-modal-dialog"
          overlayClassName="modern-modal-overlay"
          shouldCloseOnOverlayClick={true}
        >
          <div className="custom-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{tour.title}</h4>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => closeModal(tour.id)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="modal-body">
                <div className="modal-layout">
                  {/* Sección de imagen */}
                  <div className="modal-image-section">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="modal-image"
                    />
                  </div>
                  
                  {/* Sección de información */}
                  <div className="modal-info-section">
                    <div className="info-content">
                      <div className="category-badge mb-3">
                        <span className="badge bg-warning text-dark">
                          <i className={`${tour.icon} me-2`}></i>
                          {getCategoryName(tour.category)}
                        </span>
                      </div>
                      
                      <div className="info-item">
                        <div className="info-icon">
                          <i className="fas fa-info-circle"></i>
                        </div>
                        <div className="info-text">
                          <div className="info-label">{t.informacion || "Descripción"}</div>
                          <div className="info-value">{tour.description}</div>
                        </div>
                      </div>
                      
                      <div className="info-grid">
                        <div className="info-item">
                          <div className="info-icon">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <div className="info-text">
                            <div className="info-label">{t.ubicacion || "Ubicación"}</div>
                            <div className="info-value">{tour.location}</div>
                          </div>
                        </div>
                        
                        <div className="info-item">
                          <div className="info-icon">
                            <i className="fas fa-calendar"></i>
                          </div>
                          <div className="info-text">
                            <div className="info-label">{t.fecha || "Fecha"}</div>
                            <div className="info-value">{tour.date}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="price-highlight">
                        <i className="fas fa-tag me-2"></i>
                        <span>{tour.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                <div className="d-flex gap-3 w-100">
                  <button 
                    className="btn btn-outline-warning"
                    onClick={() => openShareModal(tour.id)}
                  >
                    <FaShareAlt className="me-2" />
                    {t.compartir || "Compartir"}
                  </button>
                  <a 
                    href="https://wa.me/573243433200" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-warning flex-grow-1"
                  >
                    <i className="fab fa-whatsapp me-2"></i>
                    {t.bookWhatsApp || "Reservar por WhatsApp"}
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
              <h4 className="modal-title">{t.shareRoute || "Compartir Recorrido"}</h4>
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
                  <span>{showCopyTooltip ? (t.copied || "¡Copiado!") : (t.copiar || "Copiar")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* CTA Section */}
      <div className="cta-section text-center mt-5 p-5 bg-warning text-dark rounded">
        <h3 className="fw-bold mb-3">{t.notFindLooking || "¿Quieres vivir una experiencia única?"}</h3>
        <p className="mb-4">{t.customRoutes || "Contáctanos para más información"}</p>
        <a href="#contact" className="btn btn-dark btn-lg">
          <i className="fas fa-comments me-2"></i>
          {t.contactUs || "Contáctanos"}
        </a>
      </div>
    </div>
  );
};

export default RecorridosModernos;
