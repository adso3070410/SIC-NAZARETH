import React from 'react';

const Dashboard = () => {
  // Estos nombres vienen exactamente de la estructura del proyecto
  const modulosSIA = [
    { nombre: "Configuración", sub: "Parámetros del Sistema", id: "CU-02" },
    { nombre: "Académico", sub: "Grados, Grupos y Materias", id: "CU-03/04" },
    { nombre: "Usuarios", sub: "Gestión de Personal", id: "CU-05" },
    { nombre: "Estudiantes", sub: "Registro de Alumnos", id: "CU-06" },
    { nombre: "Matrícula", sub: "Asignación de Cupos", id: "CU-07" },
    { nombre: "Carga Académica", sub: "Docentes y Materias", id: "CU-08" },
    { nombre: "Notas", sub: "Registro de Calificaciones", id: "CU-09" },
    { nombre: "Reportes", sub: "Consulta de Boletines", id: "CU-10" }
  ];

  return (
    <div style={{ padding: '15px', fontFamily: 'Arial', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '15px', borderBottom: '3px solid #3498db', paddingBottom: '10px' }}>
        <h1 style={{ margin: '0' }}>Colegio Nazareth - Panel Administrativo</h1>
        <p style={{ color: '#555' }}></p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '15px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {modulosSIA.map((m, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
            borderLeft: '5px solid #3498db'
          }}>
            <span style={{ fontSize: '0.8em', color: '#3498db', fontWeight: 'bold' }}>{m.id}</span>
            <h3 style={{ margin: '5px 0', color: '#2c3e50' }}>{m.nombre}</h3>
            <p style={{ fontSize: '0.9em', color: '#7f8c8d', marginBottom: '15px' }}>{m.sub}</p>
            <button style={{ 
              backgroundColor: '#3498db', 
              color: 'white', 
              border: 'none', 
              padding: '8px 12px', 
              borderRadius: '4px', 
              cursor: 'pointer',
              width: '100%' 
            }}>
              Ver Caso de Uso
            </button>
          </div>
        ))}
      </div>
      
      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#95a5a6', fontSize: '0.9em' }}>
        <p>© 2026 Colegio Nazareth | Implementación de Requerimientos Técnicos | Shirley Andrea Rodriguez | Ficha 3070410</p>
      </footer>
    </div>
  );
};

export default Dashboard;