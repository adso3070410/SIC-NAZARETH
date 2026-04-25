import React from 'react';
import { useNavigate } from 'react-router-dom';

const Materias = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/dashboard')}>← Volver</button>
      <h1>Registro de Materias (CU-03a)</h1>
      <div className="card" style={{ textAlign: 'left', maxWidth: '600px' }}>
        <label>Nombre de Asignatura:</label>
        <input type="text" placeholder="Ej: Matemáticas" />
        <label>Área:</label>
        <select>
          <option>Ciencias Básicas</option>
          <option>Humanidades</option>
          <option>Tecnología</option>
        </select>
        <label>Código de Materia:</label>
        <input type="text" placeholder="Ej: MAT-101" />
        <button style={{ backgroundColor: '#10b981' }}>Guardar Materia</button>
      </div>
    </div>
  );
};
export default Materias;