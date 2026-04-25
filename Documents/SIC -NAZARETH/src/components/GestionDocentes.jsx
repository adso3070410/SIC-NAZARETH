import React from 'react';

/**
 * MÓDULO: GESTIÓN DE PERSONAL (CU-05)
 */
export default function GestionDocentes({ alVolver }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <button onClick={alVolver} style={{cursor:'pointer'}}>← Volver</button>
      <h2 style={{color: '#2c3e50'}}>CU-05: Gestión de Personal Docente</h2>
      
      <div style={{ border: '1px solid #ddd', padding: '20px' }}>
        <h4>Registrar Nuevo Docente</h4>
        <input type="text" placeholder="Nombre del Docente" style={{marginRight: '10px'}} />
        <select style={{marginRight: '10px'}}>
          <option>Matemáticas</option><option>Sistemas</option>
        </select>
        <button style={{background: '#f39c12', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer'}}>
          Asignar Rol y Permisos
        </button>
      </div>

      <p style={{marginTop: '20px', color: '#27ae60'}}><strong>Resultado:</strong> Docente habilitado en sistema satisfactoriamente.</p>
    </div>
  );
}