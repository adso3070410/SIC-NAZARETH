import React, { useState } from 'react';

// Pantalla para entrar al sistema
function Login({ alIngresar }) {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  function revisarDatos(e) {
    e.preventDefault();
    // Si el usuario es admin y la clave es 123, entramos
    if (usuario === 'admin' && clave === '123') {
      alIngresar();
    } else {
      alert("Los datos son incorrectos");
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Bienvenido al Colegio Nazareth</h2>
      <form onSubmit={revisarDatos}>
        <input type="text" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} /> <br/>
        <input type="password" placeholder="Contraseña" onChange={(e) => setClave(e.target.value)} /> <br/>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;