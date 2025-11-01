import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx';
import './styles/main.scss';
import './i18n'; // importa la configuración global de i18n
// import { LanguageProvider } from './contexts/LanguageProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <LanguageProvider> */}
        <App />
      {/* </LanguageProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);