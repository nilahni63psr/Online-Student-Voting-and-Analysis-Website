import React, { useState } from 'react'
import "./Login2.css";
import {useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    function nameChange(e){
        setName(e.target.value)
    }
    function passChange(e)
    {
        setPass(e.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        alert("Confirm Your Credentials"+"\n"+"Name:"+name+"\n"+"Password:"+pass)
        navigate('/Election')
    }
  return (
    <div className="lgn">
         <h1>Login</h1>
        <form onSubmit={handleSubmit} className='ip1'>
        <label htmlFor='name'>Username:</label><br></br><br></br>
        <input type='text' required id='name' value={name} onChange={nameChange} placeholder='Enter your name...'/><br></br><br></br>
        <label htmlFor='pass'>Password:</label><br></br><br></br>
        <input type='password'  required id='pass' value={pass} onChange={passChange} placeholder='Enter a valid password...' /><br></br><br></br>
        <button type='submit'>Submit</button><br></br><br></br>
        </form>
    </div>
  )
}


