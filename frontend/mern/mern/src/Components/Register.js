import { useNavigate } from 'react-router-dom';
import './Register.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Register() {
    const navigate = useNavigate();
    const [adminPins, setAdminPins] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        job: '',
        email: '',
        pass: '',
        pin: ''
    });
    useEffect(() => {
        axios.get('http://localhost:3001/users/admins')
            .then(response => {
                if (response.data.length > 0) {
                    const pins = response.data.map(admin => admin.pin);
                    setAdminPins(pins);
                    console.log(pins);
                }
            })
            .catch(err => {
                console.error("Error fetching admin pins:", err);
            });
    }, []); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.pin.length !== 4) {
            alert("The pin must be of 4 digits only!!");
            return;
        }

        axios.post(`http://localhost:3001/users/admins`, formData)
            .then(() => {
                alert('Registered Successfully');
                navigate('/Login2');
            })
            .catch(err => {
                alert("Error registering admin. Please try again.");
            });
    };

    return (
        <div className="reg">
            <div className="regn">
                <form onSubmit={handleSubmit}>
                    <center>
                        <h1 id='h1'>Admin Registration</h1>
                        <input className='input1' type='text' name='name'  id='name' value={formData.name} onChange={handleChange}required placeholder='Name' /><br></br><br></br>
                        <input className='input1' type='text' name='job' id='job' value={formData.job} onChange={handleChange}required placeholder='Job Role'  /><br></br><br></br>
                        <input className='input1' type='text' id='email' name='email' value={formData.email} onChange={handleChange} required placeholder='Email ID' /><br></br><br></br>
                        <input type='password' className='input1' id='pass' name='pass' value={formData.pass} onChange={handleChange}required placeholder='Password' /><br></br><br></br>
                        <input type='number' className='input1' id='pin' name='pin' value={formData.pin} onChange={handleChange}required placeholder='Enter 4 digit unique ID' /><br></br><br></br>
                        <button id='acc' type='submit'>Register</button>
                    </center><br></br>
                </form>
            </div>
        </div>
    );
}