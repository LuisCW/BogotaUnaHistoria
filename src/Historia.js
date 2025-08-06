import React, { useState, useContext } from "react";
import Modal from "react-modal";
import {
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

import Virgen from "./Historia/Virgen de la Candelaria origen de la celebración.jpeg";
import Septembrina from "./Historia/Dn5oTH5U4AEMQZN.jpg";
import Espeluco from "./Historia/8080466068_d5fce2e4e5_z.jpg";

Modal.setAppElement("#root");

const MAX_DESCRIPTION_LENGTH = 70;

const truncateDescription = (description) => {
  return description.length > MAX_DESCRIPTION_LENGTH
    ? description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
    : description;
};

function Historia() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [modalIsOpen, setModalIsOpen] = useState({});
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);

  const openModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: true });
    window.history.pushState({}, "", `?historia=${id}`);
  };

  const closeModal = (id) => {
    setModalIsOpen({ ...modalIsOpen, [id]: false });
    window.history.pushState({}, "", window.location.pathname);
  };

  const generateShareLink = (id) => {
    return `https://bogotaunahistoria.azurewebsites.net/share/historia/${id}`;
  };

  const openShareModal = (id, item) => {
    const shareUrl = generateShareLink(id);
    // Actualiza las meta tags del documento para compartir
    document.querySelector('meta[property="og:title"]').content = item.title;
    document.querySelector('meta[property="og:description"]').content =
      item.description;
    document.querySelector(
      'meta[property="og:image"]'
    ).content = `${window.location.origin}${item.image}`;
    document.querySelector('meta[property="og:url"]').content = shareUrl;
    document.querySelector(
      'meta[name="twitter:image"]'
    ).content = `${window.location.origin}${item.image}`;

    setShareLink(shareUrl);
    setShareModalIsOpen(true);
  };

  const historias = [
    {
      id: 1,
      title: t.church,
      image: Virgen,
      description: t.storie1,
    },
    {
      id: 2,
      title: t.septembrina,
      image: Septembrina,
      description: t.storie2,
    },
    {
      id: 3,
      title: t.leyenda,
      image: Espeluco,
      description: t.storie3,
    },
  ];

  return (
    <section className="my-5 bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold">{t.historias}</h2>
        <div className="row g-4">
          {historias.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div
                className="card tour-card"
                onClick={() => openModal(item.id)}
              >
                <div className="card-img-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center mb-3">{item.title}</h5>
                  <p className="card-text text-muted small">
                    {truncateDescription(item.description)}
                  </p>
                </div>
                <div className="card-footer bg-transparent text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(item.id);
                    }}
                    className="btn btn-primary w-100"
                  >
                    {t.informacion}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openShareModal(item.id, item);
                    }}
                    className="btn btn-secondary w-100 mt-2"
                  >
                    <FaShareAlt /> {t.compartir}
                  </button>
                </div>
              </div>
              <Modal
                isOpen={!!modalIsOpen[item.id]}
                onRequestClose={() => closeModal(item.id)}
                contentLabel={item.title}
                className="custom-modal"
                overlayClassName="modal-overlay"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title">{item.title}</h3>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => closeModal(item.id)}
                    />
                  </div>
                  <div className="modal-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="modal-image"
                    />
                  </div>
                  <div className="modal-body">
                    <p className="text-center mb-4">{item.description}</p>
                  </div>
                  <button
                    onClick={() => closeModal(item.id)}
                    className="btn btn-secondary"
                  >
                    {t.cerrar}
                  </button>
                  <button
                    onClick={() => openShareModal(item.id, item)}
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

export default Historia;
