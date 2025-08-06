import React, { useState, useContext } from "react";
import Modal from "react-modal";
import {
  FaMapMarkerAlt,
  FaShareAlt,
  FaDollarSign,
  FaCalendarAlt,
  FaRoute,
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

// Imágenes propias de Recorridos
import Fantasmas from "./Flayers/Orange Black Dark and Trendy Online Event Business Halloween Flyer (4).png";
import Iglesias from "./Flayers/Flayer.png";
import Historia from "./Flayers/ok (2).png";
import Recorrido_Centro from "./Flayers/Historia agencia turismo moderno marrón.png";
import Recorrido_Monserrate from "./Flayers/Copia de Historia agencia turismo moderno marrón (2).png";
import Recorrido_Ambos from "./Flayers/Blue Yellow Modern Travel Agent Flyer.png";
import Navidad from "./Flayers/Red and White Modern Christmas Party Invitation (2).png";
import Mujeres from "./Flayers/Tu historia Reunión de mujeres o evento de mujeres cristianas Iglesias y cultos Rosa (1).png";

Modal.setAppElement("#root");

const MAX_DESCRIPTION_LENGTH = 70;
const truncateDescription = (description) => {
  if (!description) return "";
  return description.length > MAX_DESCRIPTION_LENGTH
    ? description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
    : description;
};

function Recorridos() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [modalIsOpen, setModalIsOpen] = useState({});
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);

  const openModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: true });
    window.history.pushState({}, "", `?Recorridos=${id}`);
  };

  const closeModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: false });
    window.history.pushState({}, "", window.location.pathname);
  };

  const generateShareLink = (id) => {
    return `https://bogotaunahistoria.azurewebsites.net/share/Recorridos/${id}`;
  };

  const openShareModal = (id, item) => {
    const shareUrl = generateShareLink(id);
    const imageUrl = `${window.location.origin}${item.image}`;
    // Actualiza las meta tags para compartir
    document.querySelector('meta[property="og:title"]').content = item.title;
    document.querySelector('meta[property="og:description"]').content =
      item.description;
    document.querySelector('meta[property="og:image"]').content = imageUrl;
    document.querySelector('meta[property="og:url"]').content = shareUrl;
    document.querySelector('meta[name="twitter:image"]').content = imageUrl;

    setShareLink(shareUrl);
    setShareModalIsOpen(true);
  };

  // Datos únicos para Recorridos
  const attractions = [
    {
      id: 1,
      title: t.ghostTourTitle,
      image: Fantasmas,
      description: t.ghostTourDesc,
      location: t.ghostTourLocation,
      price: t.voluntaryPrice,
      date: t.ghostTourDate,
      type: t.ghostTour,
    },
    {
      id: 2,
      title: t.churchTourTitle,
      image: Iglesias,
      description: t.churchTourDesc,
      location: t.churchTourLocation,
      price: t.price2,
      date: t.churchTourDate,
      type: t.culturalTour,
    },
    {
      id: 3,
      title: t.hiddenHistoryTitle,
      image: Historia,
      description: t.hiddenHistoryDesc,
      location: t.hiddenHistoryLocation,
      price: t.voluntaryPrice,
      date: t.hiddenHistoryDate,
      type: t.culturalTour,
    },
    {
      id: 4,
      title: t.historycenterTitle,
      image: Recorrido_Centro,
      description: t.historycenterDesc,
      location: t.historycenterLocation,
      price: t.price3,
      date: t.historycenterDate,
      type: t.touristTour,
    },
    {
      id: 5,
      title: t.monserrateTourTitle,
      image: Recorrido_Monserrate,
      description: t.monserrateTourDesc,
      location: t.monserrateTourLocation,
      price: t.Price4,
      date: t.monserrateTourDate,
      type: t.touristTour,
    },
    {
      id: 6,
      title: t.combinedTourTitle,
      image: Recorrido_Ambos,
      description: t.combinedTourDesc,
      location: t.combinedTourLocation,
      price: t.Price5,
      date: t.combinedTourDate,
      type: t.touristTour,
    },
    {
      id: 7,
      title: t.christmasTourTitle,
      image: Navidad,
      description: t.christmasTourDesc,
      location: t.christmasTourLocation,
      price: t.voluntaryPrice,
      date: t.christmasTourDate,
      type: t.christmasTour,
    },
    {
      id: 8,
      title: t.womanTourTitle,
      image: Mujeres,
      description: t.womanTourDesc,
      location: t.womanTourLocation,
      price: t.Price6,
      date: t.womanTourDate,
      type: t.culturalTour,
    },
  ];

  return (
    <section className="my-5 bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold">{t.recorridos}</h2>
        <div className="row g-4">
          {attractions.map((attraction) => (
            <div className="col-md-6 col-lg-4" key={attraction.id}>
              <div
                className="card tour-card"
                onClick={() => openModal(attraction.id)}
              >
                <div className="card-img-container">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center mb-3">
                    {attraction.title}
                  </h5>
                  <p className="card-text text-muted small">
                    {truncateDescription(attraction.description)}
                  </p>
                  <div className="mt-3">
                    <div className="d-flex align-items-center mb-2">
                      <FaMapMarkerAlt className="text-primary me-2" />
                      <small>{attraction.location}</small>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FaDollarSign className="text-primary me-2" />
                      <small>{attraction.price}</small>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FaCalendarAlt className="text-primary me-2" />
                      <small>{attraction.date}</small>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-transparent text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(attraction.id);
                    }}
                    className="btn btn-primary w-100"
                  >
                    {t.informacion}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openShareModal(attraction.id, attraction);
                    }}
                    className="btn btn-secondary w-100 mt-2"
                  >
                    <FaShareAlt /> {t.compartir}
                  </button>
                </div>
              </div>
              <Modal
                isOpen={!!modalIsOpen[attraction.id]}
                onRequestClose={() => closeModal(attraction.id)}
                contentLabel={attraction.title}
                className="custom-modal"
                overlayClassName="modal-overlay"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title">{attraction.title}</h3>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => closeModal(attraction.id)}
                    />
                  </div>
                  <div className="modal-image-wrapper">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="modal-image"
                    />
                  </div>
                  <div className="modal-body">
                    <p className="text-center mb-4">{attraction.description}</p>
                    <div className="info-section">
                      <div className="info-item">
                        <div className="info-icon bg-primary bg-opacity-10">
                          <FaMapMarkerAlt className="text-primary" />
                        </div>
                        <div>
                          <small className="text-muted d-block">
                            {t.ubicacion}
                          </small>
                          <strong>{attraction.location}</strong>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="info-icon bg-primary bg-opacity-10">
                          <FaDollarSign className="text-primary" />
                        </div>
                        <div>
                          <small className="text-muted d-block">
                            {t.precio}
                          </small>
                          <strong>{attraction.price}</strong>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="info-icon bg-primary bg-opacity-10">
                          <FaCalendarAlt className="text-primary" />
                        </div>
                        <div>
                          <small className="text-muted d-block">
                            {t.fecha}
                          </small>
                          <strong>{attraction.date}</strong>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="info-icon bg-primary bg-opacity-10">
                          <FaRoute className="text-primary" />
                        </div>
                        <div>
                          <small className="text-muted d-block">
                            {t.tour}
                          </small>
                          <strong>{attraction.type}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => closeModal(attraction.id)}
                    className="btn btn-secondary"
                  >
                    {t.cerrar}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openShareModal(attraction.id);
                    }}
                    className="btn btn-secondary w-100 mt-2"
                  >
                    <FaShareAlt /> {t.compartir}
                  </button>
                </div>
              </Modal>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={shareModalIsOpen}
        onRequestClose={() => setShareModalIsOpen(false)}
        className="custom-modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3>{t.compartir}</h3>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShareModalIsOpen(false)}
            />
          </div>
          <div className="modal-body d-flex flex-column align-items-center gap-4 py-4">
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <FacebookShareButton url={shareLink}>
                <FacebookIcon size={40} round />
                <span>{t.facebook}</span>
              </FacebookShareButton>
              <FacebookMessengerShareButton
                url={shareLink}
                appId="YOUR_FACEBOOK_APP_ID"
              >
                <FacebookMessengerIcon size={40} round />
                <span>{t.messenger}</span>
              </FacebookMessengerShareButton>
              <TwitterShareButton url={shareLink}>
                <TwitterIcon size={40} round />
                <span>{t.twitter}</span>
              </TwitterShareButton>
              <WhatsappShareButton url={shareLink}>
                <WhatsappIcon size={40} round />
                <span>{t.whatsapp}</span>
              </WhatsappShareButton>
              <TelegramShareButton url={shareLink}>
                <TelegramIcon size={40} round />
                <span>{t.telegram}</span>
              </TelegramShareButton>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareLink);
                setShowCopyTooltip(true);
                setTimeout(() => setShowCopyTooltip(false), 2000);
              }}
              className="btn btn-outline-primary position-relative"
            >
              {t.copiar}
              {showCopyTooltip && (
                <div className="copy-tooltip">{t.copiado}</div>
              )}
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default Recorridos;