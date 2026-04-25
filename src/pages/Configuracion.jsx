import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Configuracion = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <button onClick={() => navigate('/dashboard')} style={{ width: 'auto', marginBottom: '20px' }}>
        ← Volver al Panel
      </button>

      <header style={{ borderBottom: '2px solid #1e3a8a', marginBottom: '30px', paddingBottom: '10px' }}>
        <h1>Configuración del Sistema (CU-02)</h1>
        <p>Gestión de identidad institucional y seguridad.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        
        {/* SECCIÓN 1: DATOS DEL COLEGIO */}
        <div className="card" style={{ margin: 0, textAlign: 'left' }}>
          <h3 style={{ color: '#1e3a8a' }}>Datos de la Institución</h3>
          <hr />
          <label>Nombre del Colegio:</label>
          <input type="text" defaultValue="Colegio Nazareth" />
          
          <label>Logo Institucional:</label>
          <input type="file" accept="image/*" />
          
          <label>Dirección:</label>
          <input type="text" placeholder="Calle... Carrera... Barrio..." />
          
          <label>Teléfono de Contacto:</label>
          <input type="tel" placeholder="601..." />
          
          <label>Correo Electrónico:</label>
          <input type="email" placeholder="contacto@colegionazareth.edu.co" />
          
          <button style={{ marginTop: '10px', backgroundColor: '#10b981' }}>
            Actualizar Datos Institucionales
          </button>
        </div>

        {/* SECCIÓN 2: SEGURIDAD Y PARÁMETROS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Cambio de Contraseña */}
          <div className="card" style={{ margin: 0, textAlign: 'left' }}>
            <h3 style={{ color: '#dc2626' }}>Seguridad de Usuario</h3>
            <hr />
            <label>Contraseña Actual:</label>
            <input type="password" placeholder="••••••••" />
            <label>Nueva Contraseña:</label>
            <input type="password" placeholder="Mínimo 8 caracteres" />
            <button style={{ marginTop: '10px', backgroundColor: '#3b82f6' }}>
              Cambiar Contraseña
            </button>
          </div>

          {/* Parámetros Académicos */}
          <div className="card" style={{ margin: 0, textAlign: 'left' }}>
            <h3 style={{ color: '#f59e0b' }}>Parámetros Académicos</h3>
            <hr />
            <label>Nota Mínima de Aprobación:</label>
            <input type="number" step="0.1" defaultValue="3.0" min="1.0" max="5.0" />
            <p style={{ fontSize: '0.8rem', color: '#666' }}>
              * Este valor afectará el cálculo de los boletines finales.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Configuracion;