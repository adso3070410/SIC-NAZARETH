import React, { useState } from 'react';

/**
 * ESTÁNDAR: Manejo de login simple.
 * COMENTARIO: Valida usuario y contraseña para entrar al sistema.
 */
function Login({ alIngresar }) {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Validamos datos básicos
    if (usuario === 'admin' && clave === '123') {
      alIngresar(); // <--- Aquí es donde debe conectar con App.jsx
    } else {
      alert("Usuario o clave incorrecta (admin / 123)");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial' }}>
      <h2>SIA - Colegio Nazareth</h2>
      <form onSubmit={manejarEnvio} style={{ border: '1px solid #ccc', padding: '20px', display: 'inline-block', borderRadius: '8px' }}>
        <input 
          type="text" 
          placeholder="Usuario" 
          onChange={(e) => setUsuario(e.target.value)} 
          style={{ marginBottom: '10px', display: 'block' }}
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          onChange={(e) => setClave(e.target.value)} 
          style={{ marginBottom: '10px', display: 'block' }}
        />
        <button type="submit" style={{ width: '100%', cursor: 'pointer' }}>Entrar al Sistema</button>
      </form>
    </div>
  );
}

export default Login;