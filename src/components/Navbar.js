// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add your custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/patient-login">Patient Login</Link></li>
        <li><Link to="/doctor-login">Doctor Login</Link></li>
      </ul>
    </nav>
  );
};


export default Navbar;
