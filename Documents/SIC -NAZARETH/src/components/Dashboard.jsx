import React from 'react';

/**
 * ESTÁNDAR: Uso de arreglos y .map() para mostrar datos.
 * COMENTARIO: Menú principal con acceso a los módulos (CU).
 */
function Dashboard({ navegarA }) {
  const modulos = [
    { id: 'registro', nombre: 'Estudiantes', cu: 'CU-06' },
    { id: 'notas', nombre: 'Notas', cu: 'CU-09' },
    { id: 'docentes', nombre: 'Docentes', cu: 'CU-05' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ borderBottom: '2px solid blue' }}>SIA - Panel Principal</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {modulos.map((m) => (
          <div key={m.id} style={{ border: '1px solid #999', padding: '15px', borderRadius: '8px', width: '150px' }}>
            <h3>{m.nombre}</h3>
            <p>{m.cu}</p>
            <button onClick={() => navegarA(m.id)}>Abrir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;