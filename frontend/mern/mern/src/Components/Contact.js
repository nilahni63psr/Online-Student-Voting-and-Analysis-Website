import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Contact.css'
import { useNavigate } from 'react-router-dom';
export default function Contact() {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Thank you for contacting us!!!")
navigate('/')
    };

    return (
        <div className='container'>
             <div className="content">
      <nav className='primary-nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/decide">Register</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <NavLink to="/service">Services</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </nav>
      </div>
            <div className='Form'>
            <form action="mailto:22cs063@psr.edu.in"onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label><br></br><br></br>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required/><br></br><br></br>
                <label htmlFor='email'>Email:</label><br></br><br></br>
                <input type="email" name="email" value={formData.email} onChange={handleChange}  required/><br></br><br></br>
                <label htmlFor='message'>Message</label><br></br><br></br>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea><br></br><br></br>
                <button type="submit">Send</button>
            </form>
            </div>
            </div>
    );
}
