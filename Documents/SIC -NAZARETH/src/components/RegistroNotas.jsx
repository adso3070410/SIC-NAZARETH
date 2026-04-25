import React from 'react';

function RegistroNotas({ alVolver }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <button onClick={alVolver} style={{ marginBottom: '20px', cursor: 'pointer' }}>← Volver al Panel</button>
      <h2 style={{ color: '#2c3e50' }}>Módulo de Gestión de Notas (CU-09)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Estudiante</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Materia</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Nota final</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>Shirley Rodriguez</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>Desarrollo de Software</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>5.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RegistroNotas;