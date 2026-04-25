import React, { useState } from 'react';

function Login({ alEntrar }) {
  const [rol, setRol] = useState('Administrador');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [verPass, setVerPass] = useState(false);

  const manejarValidacion = (e) => {
    e.preventDefault();
    if (!user || !pass) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    // Credencial de prueba para todos los roles: admin / 123
    if (user === 'admin' && pass === '123') {
      alert(`¡Acceso Exitoso como ${rol}!`);
      alEntrar(rol);
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  const recuperarClave = () => {
    const correo = prompt("Ingrese su correo institucional:");
    if (correo) alert("Enlace enviado a: " + correo);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <div style={{ border: '2px solid #3498db', display: 'inline-block', padding: '30px', borderRadius: '15px' }}>
        <h2>SIA - COLEGIO NAZARETH</h2>
        <form onSubmit={manejarValidacion}>
          <label>Seleccione su Rol:</label>
          <select value={rol} onChange={(e) => setRol(e.target.value)} style={{ display: 'block', margin: '10px auto', padding: '10px', width: '250px' }}>
            <option>Administrador</option>
            <option>Docente</option>
            <option>Estudiante</option>
            <option>Administrativo</option>
          </select>
          <input type="text" placeholder="Usuario" onChange={(e) => setUser(e.target.value)} style={{ display: 'block', margin: '10px auto', padding: '10px', width: '230px' }} />
          <div style={{ position: 'relative' }}>
            <input type={verPass ? "text" : "password"} placeholder="Contraseña" onChange={(e) => setPass(e.target.value)} style={{ display: 'block', margin: '10px auto', padding: '10px', width: '230px' }} />
            <button type="button" onClick={() => setVerPass(!verPass)} style={{ position: 'absolute', right: '15px', top: '10px', background: 'none', border: 'none' }}>
              {verPass ? "👁️" : "🙈"}
            </button>
          </div>
          <button type="submit" style={{ backgroundColor: '#3498db', color: 'white', padding: '10px', width: '100%', cursor: 'pointer' }}>INGRESAR</button>
        </form>
        <button onClick={recuperarClave} style={{ background: 'none', border: 'none', color: '#3498db', marginTop: '15px', cursor: 'pointer' }}>¿Olvidó su contraseña?</button>
      </div>
    </div>
  );
}

export default Login;