import React, { createContext, useContext, useState } from 'react';
import ES from "./mundo.png";
import EN from "./estados-unidos.png";
import "./App.css";

// Crear el contexto de idioma
const LanguageContext = createContext({
  language: 'es',
  toggleLanguage: () => {}
});

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Proveedor del contexto de idioma
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Componente selector de idioma
const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();
  
  const languages = [
    { code: 'es', label: 'ES', title: 'Español', flag: ES },
    { code: 'en', label: 'EN', title: 'English', flag: EN }
  ];

  return (
    <div className="language-selector-modern">
      {languages.map(({ code, label, title, flag }) => (
        <button
          key={code}
          onClick={() => toggleLanguage(code)}
          className={`language-btn ${language === code ? 'active' : ''}`}
          title={title}
        >
          <img 
            src={flag} 
            alt={title}
            className="flag-icon"
          />
          <span className="lang-text">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
export { LanguageContext };