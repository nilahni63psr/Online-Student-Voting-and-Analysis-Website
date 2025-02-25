
import React from "react";
import "./AboutUs.css";
import { NavLink } from 'react-router-dom';
export default function AboutUs() {
  return (
    <div>
          <div className="content">
      <nav className='primary-nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/decide">Register</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <NavLink to="/service">Services</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </nav>
      </div>
      <div className="abt1">
        <img src="https://t4.ftcdn.net/jpg/03/30/28/45/360_F_330284507_zWMKJuSAPN2VyomK4et4dTdHi2P8lmHb.jpg" />
        <br></br>
        <p>
          "We envision a world where every student, regardless of location or
          background, has a voice in their institution's governance. By
          leveraging cutting-edge technologies, we aim to revolutionize the
          voting process and ensure that it is not only fair but also
          transparent and accessible to all students."
        </p>
      </div>
      <div className="abt2">
        <img src="https://startrackautomation.in/Scripts/Web_Application/images/about/Mission.jpg" />
        <br></br>
        <p>
          "Our platform is designed with students in mind. We strive to make
          student elections as accessible and transparent as possible. We
          provide educational resources to help students understand the
          importance of voting and how the system works, ensuring an informed
          and empowered electorate."
        </p>
      </div>
    </div>
  );
}