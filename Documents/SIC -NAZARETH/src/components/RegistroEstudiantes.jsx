import React, { useState } from 'react';

/**
 * MÓDULO: REGISTRO DE ALUMNOS (CU-06) Y CONSULTA (CU-10)
 */
export default function RegistroEstudiantes({ alVolver }) {
  const [mensaje, setMensaje] = useState('');

  const guardar = (e) => {
    e.preventDefault();
    setMensaje("✅ Datos guardados con éxito. Estudiante registrado en el sistema.");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <button onClick={alVolver} style={{cursor:'pointer'}}>← Volver</button>
      <h2 style={{color: '#2c3e50'}}>CU-06: Registro de Alumnos</h2>
      
      <form onSubmit={guardar} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', maxWidth: '400px' }}>
        <label style={{display:'block'}}>Nombres Completos:</label>
        <input type="text" required style={{width: '100%', marginBottom: '10px'}} />
        
        <label style={{display:'block'}}>Documento de Identidad:</label>
        <input type="number" required style={{width: '100%', marginBottom: '10px'}} />
        
        <label style={{display:'block'}}>Grado a Matricular:</label>
        <select style={{width: '100%', marginBottom: '10px'}}>
          <option>Transición</option><option>Primero</option><option>Segundo</option>
        </select>

        <button type="submit" style={{ background: '#27ae60', color: 'white', padding: '10px', width: '100%', border: 'none', cursor: 'pointer' }}>
          GUARDAR INFORMACIÓN
        </button>
      </form>

      {mensaje && <p style={{ color: 'green', fontWeight: 'bold', marginTop: '15px' }}>{mensaje}</p>}

      <hr style={{marginTop: '30px'}} />
      <h3>CU-10: Consulta de Alumnos Inscritos</h3>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead style={{background: '#3498db', color: 'white'}}>
          <tr>
            <th>ID</th><th>Nombre</th><th>Grado</th><th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>001</td><td>Shirley Rodriguez</td><td>Once</td><td>Matriculado</td></tr>
        </tbody>
      </table>
    </div>
  );
}