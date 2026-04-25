import React from 'react';

/**
 * ESTÁNDAR: Renderizado de listas de personal docente.
 * COMENTARIO: Módulo para la administración de profesores (CU-05).
 */
function GestionDocentes({ alVolver }) {
  // Lista de ejemplo para que la pantalla se vea llena de información
  const profesores = [
    { id: 1, nombre: "Juan Pérez", area: "Matemáticas" },
    { id: 2, nombre: "María López", area: "Ciencias" },
    { id: 3, nombre: "Ricardo Gómez", area: "Inglés" }
  ];

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <button onClick={alVolver} style={{ marginBottom: '20px', cursor: 'pointer' }}>
        ← Volver al Panel
      </button>
      
      <h2 style={{ color: '#2c3e50' }}>Gestión de Docentes (CU-05)</h2>
      <hr />
      
      <div style={{ marginTop: '20px' }}>
        <p>A continuación se muestra la lista de docentes registrados en el sistema:</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4' }}>
              <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Nombre del Docente</th>
              <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Área / Materia</th>
            </tr>
          </thead>
          <tbody>
            {profesores.map((p) => (
              <tr key={p.id}>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{p.nombre}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{p.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button style={{ padding: '10px', cursor: 'pointer' }}>+ Vincular Nuevo Docente</button>
      </div>
    </div>
  );
}

export default GestionDocentes;