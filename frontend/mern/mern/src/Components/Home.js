
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'
export default function Home() {
  return (
    <div className="main">
      <div className="content">
      <nav className='primary-nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/decide">Register</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <NavLink to="/service">Services</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </nav>
      </div>
      <h1 className='wel'>Welcome to the Online Student Voting Platform</h1>
      <img src='https://static.vecteezy.com/system/resources/previews/010/999/564/original/election-day-political-hand-drawn-cartoon-flat-illustration-with-voters-casting-ballots-at-polling-place-in-united-states-suitable-for-poster-or-campaign-vector.jpg' width="100%" height={545}/>
    </div>
  );
}