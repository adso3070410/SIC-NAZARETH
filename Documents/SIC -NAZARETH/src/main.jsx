import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importamos el componente principal

/**
 * PUNTO DE ENTRADA DE LA APLICACIÓN
 * Este archivo conecta la lógica de React con el archivo index.html
 */

// Se crea la raíz del proyecto buscando el ID 'root' en el HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Cargamos el componente App, que es el corazón del sistema */}
    <App />
  </React.StrictMode>,
);
