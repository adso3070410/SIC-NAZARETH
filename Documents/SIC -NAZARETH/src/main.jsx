import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // <--- Mira que esto diga App
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)