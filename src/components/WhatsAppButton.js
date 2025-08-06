import React from 'react';

const WhatsAppButton = ({ isNearFooter }) => {
  return (
    <div
      className="whatsapp-floating-btn"
      style={{
        bottom: isNearFooter ? '120px' : '30px',
      }}
    >
      <a
        href="https://wa.me/573243433200"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        title="Contáctanos por WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-text">WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
