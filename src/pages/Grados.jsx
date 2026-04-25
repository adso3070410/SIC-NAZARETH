import React from 'react';
import { useNavigate } from 'react-router-dom';

const Grados = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/dashboard')}>← Volver</button>
      <h1>Crear Grados y Grupos (CU-03)</h1>
      <div className="card" style={{ textAlign: 'left', maxWidth: '600px' }}>
        <label>Selecciona Nivel:</label>
        <select>
          <option>Transición</option>
          {[...Array(11)].map((_, i) => (
            <option key={i}>{i + 1}° Grado</option>
          ))}
        </select>
        <label>Asigna Grupo:</label>
        <div style={{ display: 'flex', gap: '20px', margin: '10px 0' }}>
          <label><input type="radio" name="grupo" /> Grupo A</label>
          <label><input type="radio" name="grupo" /> Grupo B</label>
        </div>
        <button style={{ backgroundColor: '#3b82f6' }}>Guardar Estructura Académica</button>
      </div>
    </div>
  );
};
export default Grados;