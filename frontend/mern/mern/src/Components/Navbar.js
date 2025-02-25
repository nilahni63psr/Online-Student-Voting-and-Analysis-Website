import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='primary-nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/decide">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <NavLink to="/service">Service</NavLink>
      <NavLink to="/Contact">Contact Us</NavLink>
    </nav>
  );
}