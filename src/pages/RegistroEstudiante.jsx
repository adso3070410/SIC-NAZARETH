import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistroEstudiante = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    alert("¡Éxito! Información guardada siguiendo el proceso CU-05.");
  };

  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <button 
        onClick={() => navigate('/dashboard')} 
        style={{ backgroundColor: '#64748b', color: 'white', marginBottom: '20px', width: 'auto' }}
      >
        ← Volver al Dashboard
      </button>

      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#0891b2', borderBottom: '2px solid #0891b2', paddingBottom: '10px' }}>
          Registro de Alumnos (CU-05)
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
          
          {/* PASO 1: DATOS PERSONALES */}
          <section style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#1e3a8a' }}>1. Datos Personales</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label>Nombre Completo:</label>
              <input type="text" placeholder="Ej: Juanito Alcachofa" style={{ padding: '10px' }} />
              
              <label>Documento de Identidad:</label>
              <input type="text" placeholder="Número de TI o RC" style={{ padding: '10px' }} />
              
              <label>Fecha de Nacimiento:</label>
              <input type="date" style={{ padding: '10px' }} />
            </div>
          </section>

          {/* PASO 2: DATOS DEL ACUDIENTE */}
          <section style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#1e3a8a' }}>2. Registro del Acudiente</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label>Nombre del Responsable:</label>
              <input type="text" placeholder="Padre o Madre de familia" style={{ padding: '10px' }} />
              
              <label>Teléfono de Contacto:</label>
              <input type="tel" placeholder="300 000 0000" style={{ padding: '10px' }} />
              
              <label>Dirección:</label>
              <input type="text" placeholder="Calle... Carrera... Barrio..." style={{ padding: '10px' }} />
            </div>
          </section>

        </div>

        {/* PASO 3: ACCIÓN FINAL */}
        <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <button 
            onClick={handleSave}
            style={{ 
              backgroundColor: '#0891b2', 
              color: 'white', 
              fontSize: '1.1rem', 
              padding: '15px 50px',
              width: '100%'
            }}
          >
            3. Guardar Información del Estudiante
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistroEstudiante;