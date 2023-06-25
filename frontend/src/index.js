import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <HelmetProvider>
        <title>Mercado Libre Argentina - Envíos Gratis en el día</title>
        <meta name="description" content="Mercado Libre - Compra y venta de artículos de todo tipo" />
      </HelmetProvider>
      <App />
    </BrowserRouter>
);