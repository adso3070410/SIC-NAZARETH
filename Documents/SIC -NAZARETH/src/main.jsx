import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // COMENTARIO: Importamos el componente principal

/**
 * ESTÁNDAR: Punto de entrada de la aplicación.
 * COMENTARIO: Renderiza el componente App dentro del div con id 'root'.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)