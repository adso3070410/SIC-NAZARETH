import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  // Recuperamos el rol. Si no hay nada, por seguridad decimos que es Invitado.
  const rol = localStorage.getItem('userRol') || 'Invitado';

  const todosLosModulos = [
    { cu: 'CU-02', nombre: 'Configuración Institucional', path: '/configuracion', color: '#475569', permiso: ['Administrador'] },
    { cu: 'CU-03', nombre: 'Grados y Secciones', path: '/grados', color: '#1e40af', permiso: ['Administrador'] },
    { cu: 'CU-03a', nombre: 'Materias', path: '/materias', color: '#1e40af', permiso: ['Administrador'] },
    { cu: 'CU-03b', nombre: 'Carga Académica', path: '/carga-academica', color: '#1e40af', permiso: ['Administrador'] },
    { cu: 'CU-04', nombre: 'Gestión de Docentes', path: '/usuarios', color: '#0369a1', permiso: ['Administrador'] },
    { cu: 'CU-05', nombre: 'Registro Estudiantes', path: '/estudiantes', color: '#0891b2', permiso: ['Administrador', 'Docente'] },
    { cu: 'CU-06', nombre: 'Matrículas', path: '/matricula', color: '#0d9488', permiso: ['Administrador'] },
    { cu: 'CU-07', nombre: 'Calificaciones', path: '/notas', color: '#059669', permiso: ['Administrador', 'Docente'] },
    { cu: 'CU-08', nombre: 'Boletines', path: '/boletin', color: '#7c3aed', permiso: ['Administrador', 'Docente', 'Estudiante'] },
  ];

  // FILTRO: Solo mostramos los módulos donde el rol del usuario esté permitido
  const modulosPermitidos = todosLosModulos.filter(m => m.permiso.includes(rol));

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>SIA Nazareth</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span>Sesión: <strong style={{color: '#fbbf24'}}>{rol}</strong></span>
          <button onClick={() => { localStorage.clear(); navigate('/'); }} style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', width: 'auto' }}>
            Salir
          </button>
        </div>
      </div>

      <div style={{ padding: '40px' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1>Panel de Control</h1>
          <p>Módulos autorizados para su perfil</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {modulosPermitidos.map((m) => (
            <div key={m.cu} className="card" style={{ borderTop: `6px solid ${m.color}`, padding: '25px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#64748b' }}>{m.cu}</span>
              <h3 style={{ margin: '15px 0' }}>{m.nombre}</h3>
              <button onClick={() => navigate(m.path)} style={{ backgroundColor: m.color, color: 'white', width: '100%', padding: '10px', border: 'none', borderRadius: '8px' }}>
                Entrar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;