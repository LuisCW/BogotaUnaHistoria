import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { LanguageContext } from '../LanguageSelector';
import { translations } from '../translations';

const TourCard = ({ tour, onOpenModal }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card-custom h-100">
        <div className="card-img-wrapper">
          <img src={tour.image} className="card-img-top" alt={tour.title} />
          <div className="card-overlay">
            <div className="card-overlay-content">
              <h5 className="text-warning fw-bold">{tour.title}</h5>
              <p className="text-light mb-0">{tour.shortDesc}</p>
            </div>
          </div>
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{tour.title}</h5>
          <p className="card-text flex-grow-1">{tour.description}</p>
          
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
              onClick={() => onOpenModal(tour.id)}
            >
              <i className="fas fa-info-circle me-2"></i>
              Más Info
            </button>
            <button className="btn btn-outline-warning">
              <i className="fas fa-share-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecorridosModernos = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [modalIsOpen, setModalIsOpen] = useState({});

  const tours = [
    {
      id: 1,
      title: t.ghostTourTitle,
      shortDesc: "Historias sobrenaturales",
      description: t.ghostTourDesc,
      location: t.ghostTourLocation,
      date: t.ghostTourDate,
      price: t.voluntaryPrice,
      image: "/api/placeholder/400/250",
      category: "Temático",
      duration: "2 horas",
      difficulty: "Fácil"
    },
    {
      id: 2,
      title: t.churchTourTitle,
      shortDesc: "Arquitectura religiosa",
      description: t.churchTourDesc,
      location: t.churchTourLocation,
      date: t.churchTourDate,
      price: t.voluntaryPrice,
      image: "/api/placeholder/400/250",
      category: "Cultural",
      duration: "2.5 horas",
      difficulty: "Fácil"
    },
    {
      id: 3,
      title: t.hiddenHistoryTitle,
      shortDesc: "Secretos de la ciudad",
      description: t.hiddenHistoryDesc,
      location: t.hiddenHistoryLocation,
      date: t.hiddenHistoryDate,
      price: t.price2,
      image: "/api/placeholder/400/250",
      category: "Histórico",
      duration: "3 horas",
      difficulty: "Moderado"
    },
    {
      id: 4,
      title: t.historycenterTitle,
      shortDesc: "Experiencia personalizada",
      description: t.historycenterDesc,
      location: t.historycenterLocation,
      date: t.requestDateTime,
      price: t.price3,
      image: "/api/placeholder/400/250",
      category: "Privado",
      duration: "4 horas",
      difficulty: "Fácil"
    },
    {
      id: 5,
      title: t.monserrateTourTitle,
      shortDesc: "Vista panorámica",
      description: t.monserrateTourDesc,
      location: t.monserrateTourLocation,
      date: t.requestDateTime,
      price: t.Price4,
      image: "/api/placeholder/400/250",
      category: "Aventura",
      duration: "5 horas",
      difficulty: "Moderado"
    },
    {
      id: 6,
      title: t.combinedTourTitle,
      shortDesc: "Lo mejor de ambos mundos",
      description: t.combinedTourDesc,
      location: t.combinedTourLocation,
      date: t.requestDateTime,
      price: t.Price5,
      image: "/api/placeholder/400/250",
      category: "Completo",
      duration: "7 horas",
      difficulty: "Moderado"
    }
  ];

  const openModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: true });
  };

  const closeModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: false });
  };

  const categories = [...new Set(tours.map(tour => tour.category))];

  return (
    <div className="tours-modern">
      {/* Filtros de categorías */}
      <div className="tour-filters mb-5 text-center">
        <div className="btn-group" role="group">
          <button className="btn btn-outline-warning active">Todos</button>
          {categories.map(category => (
            <button key={category} className="btn btn-outline-warning">
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de tours */}
      <div className="row">
        {tours.map(tour => (
          <TourCard 
            key={tour.id} 
            tour={tour} 
            onOpenModal={openModal}
          />
        ))}
      </div>

      {/* Modales */}
      {tours.map(tour => (
        <Modal
          key={`modal-${tour.id}`}
          isOpen={modalIsOpen[tour.id] || false}
          onRequestClose={() => closeModal(tour.id)}
          className="modal-dialog modal-lg"
          overlayClassName="modal-overlay"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{tour.title}</h4>
              <button 
                type="button" 
                className="btn-close btn-close-white"
                onClick={() => closeModal(tour.id)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="img-fluid rounded mb-3"
                  />
                </div>
                <div className="col-md-6">
                  <p className="text-light mb-4">{tour.description}</p>
                  
                  <div className="tour-info">
                    <div className="info-item mb-3">
                      <i className="fas fa-map-marker-alt text-warning me-2"></i>
                      <strong className="text-warning">Ubicación:</strong>
                      <span className="text-light ms-2">{tour.location}</span>
                    </div>
                    
                    <div className="info-item mb-3">
                      <i className="fas fa-calendar text-warning me-2"></i>
                      <strong className="text-warning">Fecha:</strong>
                      <span className="text-light ms-2">{tour.date}</span>
                    </div>
                    
                    <div className="info-item mb-3">
                      <i className="fas fa-clock text-warning me-2"></i>
                      <strong className="text-warning">Duración:</strong>
                      <span className="text-light ms-2">{tour.duration}</span>
                    </div>
                    
                    <div className="info-item mb-3">
                      <i className="fas fa-tag text-warning me-2"></i>
                      <strong className="text-warning">Precio:</strong>
                      <span className="text-warning fw-bold ms-2">{tour.price}</span>
                    </div>
                    
                    <div className="info-item mb-3">
                      <i className="fas fa-chart-line text-warning me-2"></i>
                      <strong className="text-warning">Dificultad:</strong>
                      <span className="text-light ms-2">{tour.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex gap-2 w-100">
                <button className="btn btn-outline-warning">
                  <i className="fas fa-share-alt me-2"></i>
                  Compartir
                </button>
                <button className="btn btn-warning flex-grow-1">
                  <i className="fab fa-whatsapp me-2"></i>
                  Reservar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </Modal>
      ))}

      {/* CTA Section */}
      <div className="cta-section text-center mt-5 p-5 bg-warning text-dark rounded">
        <h3 className="fw-bold mb-3">{t.notFindLooking || "¿Tienes alguna pregunta?"}</h3>
        <p className="mb-4">{t.customRoutes || "Contáctanos para obtener más información sobre nuestros recorridos"}</p>
        <a href="#contact" className="btn btn-dark btn-lg">
          <i className="fas fa-comments me-2"></i>
          {t.contactUs || "Contáctanos"}
        </a>
      </div>
    </div>
  );
};

export default RecorridosModernos;
