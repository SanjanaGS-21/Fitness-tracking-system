import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure the logo is in the correct path

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#1e90ff',
    color: 'white',
    fontFamily: 'Segoe UI, sans-serif',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoContainer = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#ff4757',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '16px',
    transition: 'background 0.3s ease',
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#e84118';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#ff4757';
  };

  return (
    <nav style={navStyle}>
      <div style={logoContainer}>
        <img src={logo} alt="FitnessFreak Logo" height="40" />
        <span>FitnessFreak</span>
      </div>
      <ul style={ulStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/profile" style={linkStyle}>Profile</Link></li>
        <li><Link to="/dashboard" style={linkStyle}>Dashboard</Link></li>
        <li><Link to="/recipe-blog" style={linkStyle}>Recipe Blog</Link></li>
        <li>
          <button
            style={buttonStyle}
            onClick={handleLogout}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;