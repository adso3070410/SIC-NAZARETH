import React from 'react';

function Dashboard({ navegarA, rolUsuario }) {
  const modulos = [
    { id: 'registro', nombre: 'Estudiantes' },
    { id: 'notas', nombre: 'Notas' },
    { id: 'docentes', nombre: 'Docentes' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        <div>
          <h1 style={{ margin: 0 }}>SIA - Panel Principal</h1>
          {/* MEJORA: Bienvenida con el Rol seleccionado */}
          <p style={{ margin: 0, color: '#34495e', fontWeight: 'bold' }}>
            Bienvenido(a): <span style={{ color: '#e67e22' }}>{rolUsuario || 'Usuario'}</span>
          </p>
        </div>
        <button onClick={() => navegarA('login')} style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}>
          Cerrar Sesión
        </button>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        {modulos.map((m) => (
          <div key={m.id} style={{ border: '1px solid #bdc3c7', padding: '20px', borderRadius: '10px', textAlign: 'center', backgroundColor: '#ecf0f1', width: '180px' }}>
            <h3>{m.nombre}</h3>
            <button onClick={() => navegarA(m.id)} style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '8px', cursor: 'pointer', width: '100%' }}>
              Abrir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;