import React from 'react';

/**
 * ESTÁNDAR: Uso de listas para mostrar información.
 * COMENTARIO: Módulo para ver y gestionar el personal docente.
 */
function GestionDocentes({ alVolver }) {
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={alVolver}>← Volver al Panel</button>
      <h2>Gestión de Docentes (CU-05)</h2>
      <hr />
      <p>Lista de profesores activos en el Colegio Nazareth:</p>
      <ul>
        <li>Juan Pérez - Matemáticas</li>
        <li>María López - Ciencias</li>
        <li>Ricardo Gómez - Inglés</li>
      </ul>
      <button onClick={() => alert("Función para agregar docente próximamente")}>
        + Agregar Nuevo Docente
      </button>
    </div>
  );
}

export default GestionDocentes;