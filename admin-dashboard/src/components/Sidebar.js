import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#f0f0f0', height: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <nav>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}><Link to="/" style={{ color: '#333', textDecoration: 'none', fontSize: '18px' }}>Dashboard</Link></li>
        <li style={{ marginBottom: '10px' }}><Link to="/users" style={{ color: '#333', textDecoration: 'none', fontSize: '18px' }}>Users</Link></li>
        <li style={{ marginBottom: '10px' }}><Link to="/movies" style={{ color: '#333', textDecoration: 'none', fontSize: '18px' }}>Movies</Link></li>
        <li style={{ marginBottom: '10px' }}><Link to="/cinemas" style={{ color: '#333', textDecoration: 'none', fontSize: '18px' }}>Cinemas</Link></li>
        <li style={{ marginBottom: '10px' }}><Link to="/showtimes" style={{ color: '#333', textDecoration: 'none', fontSize: '18px' }}>Showtimes</Link></li>
      </ul>
    </nav>
  </div>
  );
};

export default Sidebar;
