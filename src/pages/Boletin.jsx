import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Boletin = () => {
  const navigate = useNavigate();
  const [estudiante, setEstudiante] = useState('');
  const [mostrarBoletin, setMostrarBoletin] = useState(false);

  // Datos simulados para el reporte
  const notasSimuladas = [
    { materia: 'Matemáticas', nota: 4.5 },
    { materia: 'Español', nota: 3.8 },
    { materia: 'Ciencias', nota: 4.2 },
  ];

  const promedio = (notasSimuladas.reduce((acc, curr) => acc + curr.nota, 0) / notasSimuladas.length).toFixed(1);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate('/dashboard')} style={{ width: 'auto', marginBottom: '20px' }}>
        ← Volver al Panel
      </button>

      <header style={{ borderBottom: '2px solid #1e3a8a', marginBottom: '20px', paddingBottom: '10px' }}>
        <h1>Consulta de Boletines (CU-08)</h1>
      </header>

      {/* PASO 1: SELECCIONA ESTUDIANTE */}
      <div className="card" style={{ textAlign: 'left', marginBottom: '20px' }}>
        <h3>1. Seleccionar Estudiante</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="Nombre del alumno..." 
            value={estudiante}
            onChange={(e) => setEstudiante(e.target.value)}
          />
          <button 
            onClick={() => estudiante ? setMostrarBoletin(true) : alert("Ingrese un nombre")}
            style={{ width: 'auto', backgroundColor: '#3b82f6' }}
          >
            2. Calcular Promedio
          </button>
        </div>
      </div>

      {/* VISTA DEL BOLETÍN GENERADO */}
      {mostrarBoletin && (
        <div id="boletin-imprimir" style={{ backgroundColor: 'white', padding: '30px', border: '2px solid #eee', borderRadius: '8px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2>COLEGIO NAZARETH</h2>
            <p>Reporte Académico Periódico</p>
            <hr />
          </div>
          
          <p><strong>Estudiante:</strong> {estudiante}</p>
          <p><strong>Grado:</strong> 11° A</p>

          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f5f9' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>Asignatura</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>Calificación</th>
              </tr>
            </thead>
            <tbody>
              {notasSimuladas.map((n, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>{n.materia}</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>{n.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: '20px', textAlign: 'right', fontSize: '1.2rem' }}>
            <strong>Promedio Final: <span style={{ color: '#1e3a8a' }}>{promedio}</span></strong>
          </div>

          {/* PASO 3: GENERA PDF (Simulado con impresión) */}
          <button 
            onClick={() => window.print()} 
            style={{ marginTop: '30px', backgroundColor: '#7c3aed', width: '100%' }}
          >
            3. Generar PDF / Imprimir
          </button>
        </div>
      )}
    </div>
  );
};

export default Boletin;