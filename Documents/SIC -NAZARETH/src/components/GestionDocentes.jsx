import React from 'react';

function GestionDocentes({ alVolver }) {
  const docentes = [
    { id: 1, nombre: 'Carlos Ruiz', especialidad: 'Programación' },
    { id: 2, nombre: 'Ana Maria Lopez', especialidad: 'Base de Datos' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <button onClick={alVolver} style={{ marginBottom: '20px', cursor: 'pointer' }}>← Volver al Panel</button>
      <h2 style={{ color: '#2c3e50' }}>Gestión de Docentes (CU-05)</h2>
      <div style={{ display: 'grid', gap: '15px' }}>
        {docentes.map(d => (
          <div key={d.id} style={{ border: '1px solid #3498db', padding: '15px', borderRadius: '8px' }}>
            <strong>{d.nombre}</strong> - {d.especialidad}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GestionDocentes;