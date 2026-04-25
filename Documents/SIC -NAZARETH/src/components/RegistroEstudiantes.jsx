import React from 'react';

function RegistroEstudiantes({ alVolver }) {
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={alVolver}>Volver</button>
      <h2>Registro de Estudiantes</h2>
      <p>Nombre: <input type="text" /></p>
      <button onClick={() => alert("Registrado")}>Guardar</button>
    </div>
  );
}
export default RegistroEstudiantes;