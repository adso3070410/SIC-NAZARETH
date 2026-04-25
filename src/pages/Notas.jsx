import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Notas = () => {
  const navigate = useNavigate();

  // Función para validar que la nota esté entre 1.0 y 5.0
  const validarNota = (e) => {
    const valor = parseFloat(e.target.value);
    if (valor < 1.0 || valor > 5.0) {
      alert("Error: La calificación debe estar en el rango de 1.0 a 5.0");
      e.target.value = ""; // Limpia el campo si está fuera de rango
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/dashboard')} style={{ width: 'auto', marginBottom: '20px' }}>
        ← Volver al Panel
      </button>

      <h1>Registro de Calificaciones (CU-07)</h1>
      
      <div className="card" style={{ maxWidth: '100%', textAlign: 'left', marginBottom: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
        <p style={{ margin: 0 }}><strong>Escala Evaluativa:</strong> Mínima 1.0 | Máxima 5.0</p>
      </div>

      <table border="1" style={{ width: '100%', background: 'white', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#1e3a8a', color: 'white' }}>
          <tr>
            <th style={{ padding: '12px' }}>Estudiante</th>
            <th style={{ padding: '12px' }}>Grado</th>
            <th style={{ padding: '12px' }}>Nota (1.0 - 5.0)</th>
            <th style={{ padding: '12px' }}>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>Juan Pérez</td>
            <td style={{ padding: '10px' }}>1° A</td>
            <td style={{ padding: '10px' }}>
              <input 
                type="number" 
                step="0.1" 
                min="1.0" 
                max="5.0" 
                placeholder="0.0"
                onBlur={validarNota} 
                style={{ width: '80px', textAlign: 'center', margin: 0 }}
              />
            </td>
            <td style={{ padding: '10px' }}>
              <input type="text" placeholder="Ej: Excelente desempeño" style={{ margin: 0 }} />
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <button style={{ width: 'auto', backgroundColor: '#10b981' }} onClick={() => alert("Calificaciones guardadas correctamente")}>
          Guardar Calificaciones
        </button>
      </div>
    </div>
  );
};

export default Notas;