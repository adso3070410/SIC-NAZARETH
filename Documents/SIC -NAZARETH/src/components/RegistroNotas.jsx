import React from 'react';

/**
 * ESTÁNDAR: Componente funcional para el registro de notas.
 * COMENTARIO: Este módulo permite a los docentes subir calificaciones.
 */
function RegistroNotas({ alVolver }) {
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={alVolver}>← Volver al Panel</button>
      <h2>Registro de Calificaciones (CU-09)</h2>
      <hr />
      <form>
        <p>Materia:</p>
        <select>
          <option>Seleccione...</option>
          <option>Matemáticas</option>
          <option>Español</option>
        </select>
        <p>Nota final:</p>
        <input type="number" step="0.1" placeholder="Ej: 4.5" />
        <br /><br />
        <button type="button" onClick={() => alert("Nota guardada en el sistema")}>
          Guardar Nota
        </button>
      </form>
    </div>
  );
}

export default RegistroNotas;