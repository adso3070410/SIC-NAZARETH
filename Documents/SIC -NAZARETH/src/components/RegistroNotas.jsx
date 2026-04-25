import React, { useState } from 'react';

/**
 * MÓDULO: REGISTRO DE CALIFICACIONES (CU-09)
 */
export default function RegistroNotas({ alVolver }) {
  const [nota, setNota] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <button onClick={alVolver} style={{cursor:'pointer'}}>← Volver</button>
      <h2 style={{color: '#2c3e50'}}>CU-09: Registro de Calificaciones</h2>
      
      <div style={{ background: '#eef2f3', padding: '20px', borderRadius: '10px' }}>
        <p><strong>Paso 1:</strong> Seleccione Grupo: 
          <select style={{marginLeft: '10px'}}><option>Grado 10-A</option><option>Grado 11-B</option></select>
        </p>
        
        <p><strong>Paso 2:</strong> Ingrese Nota para el Estudiante: <em>Shirley Rodriguez</em></p>
        <input 
          type="number" 
          step="0.1" 
          placeholder="0.0 a 5.0" 
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          style={{padding: '5px'}} 
        />
        <button style={{ marginLeft: '10px', background: '#2980b9', color: 'white', border: 'none', padding: '5px 15px', cursor: 'pointer' }}>
          Calcular Promedio
        </button>
      </div>
      
      {nota && <p style={{marginTop: '10px', color: '#7f8c8d'}}>Resultado esperado: Nota habilitada en sistema.</p>}
    </div>
  );
}