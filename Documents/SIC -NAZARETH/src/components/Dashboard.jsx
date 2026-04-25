import React from 'react';

function Dashboard({ navegarA, rolUsuario }) {
  const modulos = [
    { id: 'registro', nombre: 'Estudiantes' },
    { id: 'notas', nombre: 'Notas' },
    { id: 'docentes', nombre: 'Docentes' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #3498db' }}>
        <div>
          <h1>SIA - Panel Principal</h1>
          <p>Bienvenido(a): <strong>{rolUsuario}</strong></p>
        </div>
        <button onClick={() => navegarA('login')} style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '5px', height: '40px', marginTop: '20px' }}>Cerrar Sesión</button>
      </div>
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        {modulos.map((m) => (
          <div key={m.id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', textAlign: 'center', width: '150px' }}>
            <h3>{m.nombre}</h3>
            <button onClick={() => navegarA(m.id)} style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '5px 15px', cursor: 'pointer' }}>Abrir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;