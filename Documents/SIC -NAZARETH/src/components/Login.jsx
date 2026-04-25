import React, { useState } from 'react';

/**
 * MÓDULO 1: SEGURIDAD E INICIO DE SESIÓN (CU-01)
 * ACTORES: Administrador, Docente, Estudiante, Administrativo.
 */
function Login({ alEntrar }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const manejarValidacion = (e) => {
    e.preventDefault();
    
    // VALIDACIÓN DINÁMICA POR ACTORES (Según punto 1.1 de tu documento)
    if (user === 'admin' && pass === '123') {
      alert("¡Acceso Exitoso!\nRol: ADMINISTRADOR\nPermisos: Gestión global y control de usuarios.");
      alEntrar(); 
    } 
    else if (user === 'profe' && pass === '456') {
      alert("¡Acceso Exitoso!\nRol: DOCENTE\nPermisos: Registro de notas y seguimiento académico.");
      alEntrar();
    }
    else if (user === 'alumno' && pass === '789') {
      alert("¡Acceso Exitoso!\nRol: ESTUDIANTE\nPermisos: Consulta de progreso y boletines.");
      alEntrar();
    }
    else if (user === 'secretaria' && pass === '000') {
      alert("¡Acceso Exitoso!\nRol: ADMINISTRATIVO\nPermisos: Gestión de matrículas y secretaría.");
      alEntrar();
    }
    else {
      alert("Error: Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ border: '2px solid #3498db', display: 'inline-block', padding: '40px', borderRadius: '15px', backgroundColor: '#fdfdfd', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#2c3e50' }}>SIA - COLEGIO NAZARETH</h2>
        <h4 style={{ color: '#7f8c8d' }}>Sistema de Gestión de Roles</h4>
        
        <form onSubmit={manejarValidacion}>
          <input 
            type="text" 
            placeholder="Usuario (admin, profe, alumno, secretaria)" 
            onChange={(e) => setUser(e.target.value)} 
            style={{ display: 'block', margin: '10px auto', padding: '10px', width: '280px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            onChange={(e) => setPass(e.target.value)} 
            style={{ display: 'block', margin: '10px auto', padding: '10px', width: '280px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button 
            type="submit" 
            style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}
          >
            INGRESAR
          </button>
        </form>
        <p style={{ fontSize: '11px', color: '#bdc3c7', marginTop: '15px' }}>
          * Credenciales de prueba: secretaria / 000
        </p>
      </div>
    </div>
  );
}

export default Login;