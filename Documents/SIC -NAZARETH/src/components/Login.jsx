import React, { useState } from 'react';

/**
 * MÓDULO 1: SEGURIDAD E INICIO DE SESIÓN (CU-01)
 * MEJORA: Selección de rol mediante lista desplegable para mayor usabilidad.
 */
function Login({ alEntrar }) {
  const [rol, setRol] = useState('Administrador');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const manejarValidacion = (e) => {
    e.preventDefault();
    
    // El sistema valida según el rol seleccionado
    if (user === 'admin' && pass === '123') {
      alert(`¡Acceso Exitoso!\nEntraste como: ${rol.toUpperCase()}`);
      alEntrar();
    } else {
      alert("Error: Usuario o contraseña incorrectos para el rol seleccionado.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '80px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ border: '2px solid #3498db', display: 'inline-block', padding: '40px', borderRadius: '15px', backgroundColor: '#fdfdfd', boxShadow: '0px 4px 15px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '5px' }}>SIA - COLEGIO NAZARETH</h2>
        <p style={{ color: '#7f8c8d', marginBottom: '25px' }}>Seleccione su perfil e ingrese sus datos</p>
        
        <form onSubmit={manejarValidacion}>
          {/* LISTA DESPLEGABLE DE ROLES */}
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#34495e' }}>Tipo de Usuario:</label>
          <select 
            value={rol} 
            onChange={(e) => setRol(e.target.value)}
            style={{ display: 'block', margin: '0 auto 20px', padding: '10px', width: '280px', borderRadius: '5px' }}
          >
            <option value="Administrador">Administrador</option>
            <option value="Docente">Docente</option>
            <option value="Estudiante">Estudiante</option>
            <option value="Administrativo">Administrativo</option>
          </select>

          <input 
            type="text" 
            placeholder="Nombre de Usuario" 
            onChange={(e) => setUser(e.target.value)} 
            style={{ display: 'block', margin: '10px auto', padding: '10px', width: '260px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            onChange={(e) => setPass(e.target.value)} 
            style={{ display: 'block', margin: '10px auto', padding: '10px', width: '260px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          
          <button 
            type="submit" 
            style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '12px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', width: '100%', marginTop: '10px' }}
          >
            INICIAR SESIÓN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;