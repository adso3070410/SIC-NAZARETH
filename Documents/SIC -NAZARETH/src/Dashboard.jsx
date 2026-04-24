import React from 'react';

function Dashboard({ alCerrarSesion }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
        <h2>SIA - Panel de Control (Nazareth)</h2>
        <button onClick={alCerrarSesion} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
          Cerrar Sesión
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center', borderRadius: '8px' }}>
          <h3>Alumnos</h3>
          <p>Total: 150</p>
          <button>Ver Lista</button>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center', borderRadius: '8px' }}>
          <h3>Docentes</h3>
          <p>Activos: 12</p>
          <button>Gestionar</button>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center', borderRadius: '8px' }}>
          <h3>Calificaciones</h3>
          <p>Periodo 1</p>
          <button>Subir Notas</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;