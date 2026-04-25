import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistroEstudiante = () => {
  const navigate = useNavigate();

  const handleGuardar = () => {
    alert("Información guardada: Estudiante registrado con éxito (CU-05)");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate('/dashboard')} style={{ width: 'auto', marginBottom: '20px' }}>
        ← Volver al Panel
      </button>

      <header style={{ borderBottom: '2px solid #1e3a8a', marginBottom: '20px', paddingBottom: '10px' }}>
        <h1>Registro de Alumnos (CU-05)</h1>
        <p>Complete la información para dar de alta a un nuevo estudiante en el sistema.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        {/* PASO 1: DATOS PERSONALES DEL ESTUDIANTE */}
        <div className="card" style={{ margin: 0, textAlign: 'left' }}>
          <h3 style={{ color: '#1e3a8a' }}>1. Datos Personales</h3>
          <hr />
          <label>Nombre Completo:</label>
          <input type="text" placeholder="Apellidos y Nombres" />
          
          <label>Documento de Identidad:</label>
          <input type="text" placeholder="TI / RC / CE" />
          
          <label>Fecha de Nacimiento:</label>
          <input type="date" />
          
          <label>Género:</label>
          <select>
            <option>Seleccione...</option>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </div>

        {/* PASO 2: DATOS DEL ACUDIENTE */}
        <div className="card" style={{ margin: 0, textAlign: 'left' }}>
          <h3 style={{ color: '#1e3a8a' }}>2. Información del Acudiente</h3>
          <hr />
          <label>Nombre del Acudiente:</label>
          <input type="text" placeholder="Responsable legal" />
          
          <label>Parentesco:</label>
          <select>
            <option>Madre</option>
            <option>Padre</option>
            <option>Tutor / Otro</option>
          </select>
          
          <label>Teléfono de Contacto:</label>
          <input type="tel" placeholder="Número de celular" />
          
          <label>Dirección de Residencia:</label>
          <input type="text" placeholder="Barrio y dirección" />
        </div>

      </div>

      {/* PASO 3: GUARDAR INFORMACIÓN */}
      <div style={{ marginTop: '30px', textAlign: 'center', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '15px' }}>
          Al hacer clic en guardar, el estudiante quedará habilitado para el proceso de matrícula (CU-06).
        </p>
        <button 
          onClick={handleGuardar}
          style={{ width: 'auto', padding: '12px 40px', backgroundColor: '#10b981', fontSize: '1rem' }}
        >
          3. Guardar Información del Estudiante
        </button>
      </div>
    </div>
  );
};

export default RegistroEstudiante;