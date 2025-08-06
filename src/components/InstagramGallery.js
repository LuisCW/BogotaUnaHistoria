import React, { useState, useEffect, useMemo, useContext } from 'react';
import Modal from 'react-modal';
import { LanguageContext } from '../LanguageSelector';
import { translations } from '../translations';

// Importar todas las imágenes de la carpeta Fotos
import Bogota1 from "../Fotos/bogota-1381245_1280.jpg";
import Bogota2 from "../Fotos/archivo_instituto_distrital_de_turismo_12.jpg";
import Bogota3 from "../Fotos/65_Bogotá_Museo_del_Oro_CVV6236_Retocada.jpg";
import Bogota4 from "../Fotos/bogota-3654051_1280.jpg";
import Bogota5 from "../Fotos/bogota-2839331_1280.jpg";
import Bogota6 from "../Fotos/bogota-2839320_960_720.jpg";
import Bogota7 from "../Fotos/bogota-22502_1280.jpg";
import Bogota8 from "../Fotos/bogota-221346_960_720.jpg";
import Bogota9 from "../Fotos/bogota-1768054_1280.jpg";
import Bogota10 from "../Fotos/city-6069750_960_720.jpg";
import Bogota11 from "../Fotos/city-4457801_1280.jpg";
import Bogota12 from "../Fotos/chapel-405205_960_720.jpg";
import Bogota13 from "../Fotos/buildings-6069752_1280.jpg";
import Bogota14 from "../Fotos/bolivar-park-96124_1280.jpg";
import Bogota15 from "../Fotos/bogota-54437_960_720.jpg";
import Bogota16 from "../Fotos/bogota-54436_1280.jpg";
import Bogota17 from "../Fotos/bogota-54435_960_720.jpg";
import Bogota18 from "../Fotos/bogota-54431_1280.jpg";
import Bogota19 from "../Fotos/bogota-4489562_960_720.jpg";
import Bogota20 from "../Fotos/bogota-4289714_960_720.jpg";
import Bogota21 from "../Fotos/bogota-4072371_1280.jpg";
import Bogota22 from "../Fotos/bogota-4072368_1280.jpg";
import Bogota23 from "../Fotos/bogota-4072351_960_720.jpg";
import Bogota24 from "../Fotos/bogota-4072310_1280.jpg";

const InstagramGallery = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = useMemo(() => [
    {
      src: Bogota1,
      alt: t.galleryImage1Alt || "Bogotá - Vista General",
      description: t.galleryImage1Desc || "Una vista panorámica de la hermosa ciudad de Bogotá",
      location: t.galleryImage1Location || "Bogotá, Colombia"
    },
    {
      src: Bogota2,
      alt: t.galleryImage2Alt || "Instituto Distrital de Turismo",
      description: t.galleryImage2Desc || "Edificio del Instituto Distrital de Turismo",
      location: t.galleryImage2Location || "Centro de Bogotá"
    },
    {
      src: Bogota3,
      alt: t.galleryImage3Alt || "Museo del Oro",
      description: t.galleryImage3Desc || "El famoso Museo del Oro de Bogotá",
      location: t.galleryImage3Location || "La Candelaria"
    },
    {
      src: Bogota4,
      alt: t.galleryImage4Alt || "Arquitectura Colonial",
      description: t.galleryImage4Desc || "Hermosa arquitectura colonial en el centro histórico",
      location: t.galleryImage4Location || "La Candelaria"
    },
    {
      src: Bogota5,
      alt: t.galleryImage5Alt || "Plaza de Bolívar",
      description: t.galleryImage5Desc || "La icónica Plaza de Bolívar, corazón de la ciudad",
      location: t.galleryImage5Location || "Centro Histórico"
    },
    {
      src: Bogota6,
      alt: t.galleryImage6Alt || "Atardecer en Bogotá",
      description: t.galleryImage6Desc || "Un hermoso atardecer sobre la capital",
      location: t.galleryImage6Location || "Bogotá"
    },
    {
      src: Bogota7,
      alt: t.galleryImage7Alt || "Avenida Jiménez",
      description: t.galleryImage7Desc || "La histórica Avenida Jiménez",
      location: t.galleryImage7Location || "Centro de Bogotá"
    },
    {
      src: Bogota8,
      alt: t.galleryImage8Alt || "Calles Empedradas",
      description: t.galleryImage8Desc || "Las características calles empedradas de La Candelaria",
      location: t.galleryImage8Location || "La Candelaria"
    },
    {
      src: Bogota9,
      alt: t.galleryImage9Alt || "Vista Aérea",
      description: t.galleryImage9Desc || "Vista aérea de la expansión urbana de Bogotá",
      location: t.galleryImage9Location || "Bogotá"
    },
    {
      src: Bogota10,
      alt: t.galleryImage10Alt || "Edificios Modernos",
      description: t.galleryImage10Desc || "La arquitectura moderna convive con la historia",
      location: t.galleryImage10Location || "Centro Internacional"
    },
    {
      src: Bogota11,
      alt: t.galleryImage11Alt || "Skyline de Bogotá",
      description: t.galleryImage11Desc || "El imponente skyline de la capital colombiana",
      location: t.galleryImage11Location || "Bogotá"
    },
    {
      src: Bogota12,
      alt: t.galleryImage12Alt || "Capilla Histórica",
      description: t.galleryImage12Desc || "Una de las muchas capillas históricas de la ciudad",
      location: t.galleryImage12Location || "Centro Histórico"
    },
    {
      src: Bogota13,
      alt: t.galleryImage13Alt || "Rascacielos",
      description: t.galleryImage13Desc || "Los modernos rascacielos que definen el horizonte",
      location: t.galleryImage13Location || "Zona Rosa"
    },
    {
      src: Bogota14,
      alt: t.galleryImage14Alt || "Parque Bolívar",
      description: t.galleryImage14Desc || "El verde Parque Bolívar en el corazón de la ciudad",
      location: t.galleryImage14Location || "Plaza de Bolívar"
    },
    {
      src: Bogota15,
      alt: t.galleryImage15Alt || "Calle Colonial",
      description: t.galleryImage15Desc || "Una típica calle colonial llena de historia",
      location: t.galleryImage15Location || "La Candelaria"
    },
    {
      src: Bogota16,
      alt: t.galleryImage16Alt || "Chorro de Quevedo",
      description: t.galleryImage16Desc || "El histórico Chorro de Quevedo, lugar de fundación",
      location: t.galleryImage16Location || "La Candelaria"
    },
    {
      src: Bogota17,
      alt: t.galleryImage17Alt || "Casas Coloniales",
      description: t.galleryImage17Desc || "Las coloridas casas coloniales del centro histórico",
      location: t.galleryImage17Location || "La Candelaria"
    },
    {
      src: Bogota18,
      alt: t.galleryImage18Alt || "Las Aguas",
      description: t.galleryImage18Desc || "El bohemio barrio de Las Aguas",
      location: t.galleryImage18Location || "Las Aguas"
    },
    {
      src: Bogota19,
      alt: t.galleryImage19Alt || "Arte Urbano",
      description: t.galleryImage19Desc || "El vibrante arte urbano que decora las calles",
      location: t.galleryImage19Location || "La Candelaria"
    },
    {
      src: Bogota20,
      alt: t.galleryImage20Alt || "Panorámica Nocturna",
      description: t.galleryImage20Desc || "La ciudad iluminada durante la noche",
      location: t.galleryImage20Location || "Bogotá"
    },
    {
      src: Bogota21,
      alt: t.galleryImage21Alt || "Monserrate",
      description: t.galleryImage21Desc || "El icónico Cerro de Monserrate",
      location: t.galleryImage21Location || "Monserrate"
    },
    {
      src: Bogota22,
      alt: t.galleryImage22Alt || "Centro Histórico",
      description: t.galleryImage22Desc || "El patrimonio arquitectónico del centro histórico",
      location: t.galleryImage22Location || "La Candelaria"
    },
    {
      src: Bogota23,
      alt: t.galleryImage23Alt || "Plaza Mayor",
      description: t.galleryImage23Desc || "La majestuosa Plaza Mayor y sus alrededores",
      location: t.galleryImage23Location || "Centro Histórico"
    },
    {
      src: Bogota24,
      alt: t.galleryImage24Alt || "Catedral Primada",
      description: t.galleryImage24Desc || "La imponente Catedral Primada de Bogotá",
      location: t.galleryImage24Location || "Plaza de Bolívar"
    }
  ], [t]);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'ArrowRight') {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
      }
      if (e.key === 'ArrowLeft') {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
      }
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, currentIndex, images]);

  return (
    <div className="instagram-gallery">
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index}
              className="gallery-item"
              onClick={() => openModal(image, index)}
            >
              <div className="image-wrapper">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-search-plus"></i>
                    <h5>{image.alt}</h5>
                    <p>{image.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para ver imagen completa */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="gallery-modal"
        overlayClassName="gallery-modal-overlay"
        ariaHideApp={false}
      >
        {selectedImage && (
          <div className="modal-gallery-content">
            <button 
              className="modal-close-btn"
              onClick={closeModal}
            >
              <i className="fas fa-times"></i>
            </button>
            
            <button 
              className="modal-nav-btn prev-btn"
              onClick={prevImage}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <button 
              className="modal-nav-btn next-btn"
              onClick={nextImage}
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="modal-gallery-image"
              />
            </div>

            <div className="modal-image-info">
              <h3>{selectedImage.alt}</h3>
              <p className="image-description">{selectedImage.description}</p>
              <p className="image-location">
                <i className="fas fa-map-marker-alt"></i>
                {selectedImage.location}
              </p>
              <div className="image-counter">
                {currentIndex + 1} {t.of || "/"} {images.length}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default InstagramGallery;
