import React, { useState } from 'react';

// COMPONENTE DE LOGIN: Permite el acceso según el rol seleccionado
export default function Login({ alEntrar }) {
  
  // ESTADOS: Guardan la información que el usuario escribe
  const [rol, setRol] = useState('Administrador'); // Guarda el actor seleccionado
  const [usuario, setUsuario] = useState('');      // Guarda el nombre de usuario
  const [clave, setClave] = useState('');          // Guarda la contraseña

  // FUNCIÓN VALIDAR: Se ejecuta cuando se da clic en el botón "Entrar"
  const validarIngreso = (e) => {
    e.preventDefault(); // Evita que la página se recargue sola

    // VALIDACIÓN SIMPLE PARA EL PROYECTO (PMV)
    if (usuario === 'admin' && clave === '123') {
      alert("Acceso exitoso como " + rol);
      alEntrar(rol); // Envía el rol al componente padre (App.jsx)
    } else {
      alert("Error: Usuario o clave incorrectos");
    }
  };

  // ESTILOS BÁSICOS (Directo en el código para no usar archivos CSS externos)
  const contenedorEstilo = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial'
  };

  return (
    <div style={contenedorEstilo}>
      <h2>SIA - INICIO DE SESIÓN</h2>
      
      {/* Formulario de acceso */}
      <form onSubmit={validarIngreso}>
        
        {/* 1. Selección de Actor */}
        <label>Tipo de Usuario:</label><br />
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
          <option value="Administrador">Administrador</option>
          <option value="Docente">Docente</option>
          <option value="Estudiante">Estudiante</option>
          <option value="Administrativo">Administrativo</option>
        </select>
        <br /><br />

        {/* 2. Campo Usuario */}
        <input 
          type="text" 
          placeholder="Nombre de Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)} 
        /><br /><br />

        {/* 3. Campo Clave */}
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        /><br /><br />

        {/* Botón de envío */}
        <button type="submit">INGRESAR AL SISTEMA</button>
      </form>
    </div>
  );
}