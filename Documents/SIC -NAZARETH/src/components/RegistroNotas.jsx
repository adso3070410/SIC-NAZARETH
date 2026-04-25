import React, { useState } from 'react';

/**
 * ESTÁNDAR: Manejo de estados para formularios académicos.
 * COMENTARIO: Módulo para el registro de calificaciones (CU-09).
 */
function RegistroNotas({ alVolver }) {
  const [nota, setNota] = useState('');

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <button onClick={alVolver} style={{ marginBottom: '20px', cursor: 'pointer' }}>← Volver al Panel</button>
      
      <h2 style={{ color: '#2c3e50' }}>Gestión de Notas (CU-09)</h2>
      <hr />
      
      <div style={{ marginTop: '20px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <p>Materia: <strong>Matemáticas</strong></p>
        <label>Ingrese la nota final:</label><br />
        <input 
          type="number" 
          value={nota} 
          onChange={(e) => setNota(e.target.value)}
          placeholder="0.0"
          style={{ padding: '8px', marginTop: '10px' }}
        />
        <br /><br />
        <button 
          onClick={() => alert("Nota guardada exitosamente")}
          style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Guardar Calificación
        </button>
      </div>
    </div>
  );
}

export default RegistroNotas;