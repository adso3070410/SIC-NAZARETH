import React, { useState } from 'react';

/**
 * MÓDULO 1: SEGURIDAD E INICIO DE SESIÓN (CU-01)
 * DESCRIPCIÓN: Valida credenciales, asigna rol y permite el acceso al SIA.
 */
function Login({ alEntrar }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const manejarValidacion = (e) => {
    e.preventDefault();
    
    // FLUJO BÁSICO: El sistema valida datos (Punto 2 de tu tabla)
    if (user === 'admin' && pass === '123') {
      
      // ASIGNACIÓN DE ROL: (Punto 3 de tu tabla)
      alert("¡Acceso Exitoso!\nRol: ADMINISTRADOR\nEstado: Conectado");
      
      // REDIRECCIÓN: (Punto 4 de tu tabla)
      alEntrar(); 
      
    } else {
      alert("Error: Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ border: '2px solid #3498db', display: 'inline-block', padding: '40px', borderRadius: '15px', backgroundColor: '#fdfdfd' }}>
        <h2 style={{ color: '#2c3e50' }}>SIA - COLEGIO NAZARETH</h2>
        <h4 style={{ color: '#7f8c8d' }}>Módulo de Seguridad</h4>
        
        <form onSubmit={manejarValidacion}>
          <input 
            type="text" 
            placeholder="Nombre de Usuario" 
            onChange={(e) => setUser(e.target.value)} 
            style={{ display: 'block', margin: '10px auto', padding: '10px', width: '200px' }}
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            onChange={(e) => setPass(e.target.value)} 
            style={{ display: 'block', margin: '10px auto', padding: '10px', width: '200px' }}
          />
          <button 
            type="submit" 
            style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            INGRESAR AL SISTEMA
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;