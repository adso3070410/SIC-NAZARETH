import React from 'react';

// Pantalla para anotar alumnos nuevos
function RegistroEstudiantes({ alVolver }) {
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={alVolver}>Volver al menú</button>
      <h2>Registrar Nuevo Estudiante</h2>
      <form>
        <p>Nombre:</p> <input type="text" />
        <p>Documento:</p> <input type="text" /> <br/><br/>
        <button type="button" onClick={() => alert("Guardado")}>Guardar</button>
      </form>
    </div>
  );
}

export default RegistroEstudiantes;