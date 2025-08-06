import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageSelector';
import AppModern from './AppModern';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <AppModern />
    </LanguageProvider>
  </React.StrictMode>
);
