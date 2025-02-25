import React from 'react'
import './Decide.css';
import { Link } from 'react-router-dom'
export default function Decide() {
  return (
    <div className="decide">
      <div className='btns'>
        <Link to="/register">
        <button  className='btns1'  type='submit'>Register as Admin</button>
        </Link>
        <br></br>
        <br></br>
        <Link to="/voter">
 <button className='btns2'type='submit'>Register as Voter</button>     
 </Link>
 </div>
 </div>
  )
}
