
import { useNavigate } from "react-router-dom";
import "./Voter.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Voter() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        pin: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
            axios.post(`http://localhost:3001/users/voters`, formData)
                    .then(() => {
                        alert('Registered Successfully');
                        navigate('/login');
                    })
                    .catch(err => {
                        alert("Error registering . Please try again.");
                    });
    };

    return (
        <div className='vtr'>
            <h1>Voter Registration</h1>
            <div className='too'>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label><br></br>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} required /><br></br>
                    <label>Password:</label><br></br>
                    <input type="password" name='password' value={formData.password} onChange={handleChange} required /><br></br>
                    <label>Id:</label><br></br>
                    <input type='number' value={formData.pin} name='pin' placeholder="Enter 4 digit unique id" onChange={handleChange} required /><br></br>
                    <br></br><button className="create" type='submit'>Create account</button>
                </form>
                <img src="https://img.freepik.com/premium-vector/two-factor-verification-duo-authentication-verification-code-message-secure-login-sign_501813-2113.jpg?w=1480" alt="Voter Registration" />
            </div>
        </div>
    );
}