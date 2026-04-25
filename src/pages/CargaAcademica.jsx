import React from 'react';
import { useNavigate } from 'react-router-dom';

const CargaAcademica = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate('/dashboard')}>← Volver</button>
      <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #eee' }}>Asignar Carga Académica (CU-03b)</h2>
      
      <div className="card" style={{ textAlign: 'left', marginTop: '20px' }}>
        <label>1. Selecciona Docente y Materia:</label>
        <select>
          <option>Seleccione docente...</option>
          <option>Juan Pérez - Matemáticas</option>
          <option>María López - Español</option>
        </select>

        <label style={{ marginTop: '15px', display: 'block' }}>2. Vincula Grado y Grupo:</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select><option>Grado: 11°</option></select>
          <select><option>Grupo: A</option></select>
        </div>

        <button style={{ marginTop: '30px', backgroundColor: '#1e40af', color: 'white', width: '100%' }}>
          3. Guardar Asignación
        </button>
      </div>
    </div>
  );
};

export default CargaAcademica;