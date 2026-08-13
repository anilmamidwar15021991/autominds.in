import React from 'react';

const WhatsAppBtn = () => {
  return (
    <a
      href="https://wa.me/918999442393"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn d-flex align-items-center gap-2 text-decoration-none shadow-lg"
      aria-label="Chat on WhatsApp +91 8999442393"
      title="Chat on WhatsApp: +91 8999442393"
    >
      <div className="whatsapp-icon-wrapper d-flex align-items-center justify-content-center">
        <i className="bi bi-whatsapp"></i>
      </div>
    
    </a>
  );
};

export default WhatsAppBtn;
