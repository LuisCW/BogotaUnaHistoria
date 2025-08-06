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

const MAX_DESCRIPTION_LENGTH = 70;
const truncateDescription = (description) => {
  return description.length > MAX_DESCRIPTION_LENGTH
    ? description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
    : description;
};

function Lugares() {
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
    return `https://bogotaunahistoria.azurewebsites.net/share/lugares/${id}`;
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

  // Datos únicos para Lugares
  const attractions = [
    {
      id: 1,
      title: t.cathedralTitle,
      image: Catedral,
      description: t.cathedralDesc,
      location: t.cathedralLocation,
    },
    {
      id: 2,
      title: t.monserrateTitle,
      image: Monserrate,
      description: t.monserrateDesc,
      location: t.monserrateLocation,
    },
    {
      id: 3,
      title: t.jesuitBlockTitle,
      image: Manzana,
      description: t.jesuitBlockDesc,
      location: t.jesuitBlockLocation,
    },
    {
      id: 4,
      title: t.sanCarlosTitle,
      image: Palacio,
      description: t.sanCarlosDesc,
      location: t.sanCarlosLocation,
    },
    {
      id: 5,
      title: t.colonTheaterTitle,
      image: Teatro,
      description: t.colonTheaterDesc,
      location: t.colonTheaterLocation,
    },
    {
      id: 6,
      title: t.chorroQuevedoTitle,
      image: Chorro,
      description: t.chorroQuevedoDesc,
      location: t.chorroQuevedoLocation,
    },
    {
      id: 7,
      title: t.goldMuseumTitle,
      image: Oro,
      description: t.goldMuseumDesc,
      location: t.goldMuseumLocation,
    },
    {
      id: 8,
      title: t.bogotaMuseumTitle,
      image: Bogota,
      description: t.bogotaMuseumDesc,
      location: t.bogotaMuseumLocation,
    },
    {
      id: 9,
      title: t.boteroMuseumTitle,
      image: Botero,
      description: t.boteroMuseumDesc,
      location: t.botero,
    },
  ];

  return (
    <section className="my-5 bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold">{t.lugares}</h2>
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
                <span>Facebook</span>
              </FacebookShareButton>
              <FacebookMessengerShareButton
                url={shareLink}
                appId="YOUR_FACEBOOK_APP_ID"
              >
                <FacebookMessengerIcon size={40} round />
                <span>Messenger</span>
              </FacebookMessengerShareButton>
              <TwitterShareButton url={shareLink}>
                <TwitterIcon size={40} round />
                <span>Twitter</span>
              </TwitterShareButton>
              <WhatsappShareButton url={shareLink}>
                <WhatsappIcon size={40} round />
                <span>WhatsApp</span>
              </WhatsappShareButton>
              <TelegramShareButton url={shareLink}>
                <TelegramIcon size={40} round />
                <span>Telegram</span>
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
              {t.copiar} enlace
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

export default Lugares;
