import React, { useState } from 'react';

/**
 * ESTÁNDAR: Formulario controlado por estado.
 * COMENTARIO: Valida el acceso al sistema (admin/123).
 */
function Login({ alEntrar }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const validar = (e) => {
    e.preventDefault();
    if (user === 'admin' && pass === '123') {
      alEntrar();
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <div style={{ border: '1px solid #ccc', display: 'inline-block', padding: '30px', borderRadius: '10px' }}>
        <h2>SIA - Iniciar Sesión</h2>
        <form onSubmit={validar}>
          <input type="text" placeholder="Usuario" onChange={(e) => setUser(e.target.value)} style={{ display: 'block', marginBottom: '10px' }} />
          <input type="password" placeholder="Clave" onChange={(e) => setPass(e.target.value)} style={{ display: 'block', marginBottom: '10px' }} />
          <button type="submit" style={{ width: '100%' }}>Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;