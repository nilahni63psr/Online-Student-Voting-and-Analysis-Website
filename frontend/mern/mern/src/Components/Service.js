
import React from "react";
import { NavLink } from "react-router-dom";
import "./Service.css";
export default function Service() {
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
      <h1>Your Success Partners</h1>
      <div className="two">
        <p>
          The <b>Online Student voting and analysis website</b> is designed to
          digitalize the elections in higher educational institutions. It aims
          to save time and reduce fake voting as it provides enhanced
          authentication .Though the existing websites provide secure
          authentication and real time analysis they have some drawbacks as
          well. This website allows the admin of an institution to conduct and
          monitor elections and provides real time analysis of the leading
          candidate. The candidates are also allowed to upload a short campaign
          video showcasing their strengths.
        </p>
        <img src="https://cebma.org/assets/Uploads/Page/Services.jpg" />
      </div>
    </div>
  );
}


