import React from 'react';

/**
 * COMPONENTE: Dashboard.jsx
 * Panel principal que despliega opciones según el flujo general del sistema.
 */
function Dashboard({ navegarA, rolUsuario }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        <h1>SIA - Panel Principal</h1>
        <div style={{ textAlign: 'right' }}>
          <p>Usuario: <strong>{rolUsuario}</strong></p>
          <button onClick={() => navegarA('login')} style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>Salir</button>
        </div>
      </header>

      <main style={{ marginTop: '30px' }}>
        <h3>Módulos Disponibles (PMV):</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <button onClick={() => navegarA('registro')} style={btnStyle}>Módulo Estudiantes (CU-06)</button>
          <button onClick={() => navegarA('docentes')} style={btnStyle}>Módulo Docentes (CU-05)</button>
          <button onClick={() => navegarA('notas')} style={btnStyle}>Registro de Notas (CU-09)</button>
        </div>
      </main>
    </div>
  );
}

const btnStyle = {
  padding: '30px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#f8f9fa',
  border: '1px solid #dee2e6',
  borderRadius: '8px',
  fontWeight: 'bold',
  color: '#2c3e50'
};

export default Dashboard;