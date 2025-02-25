
import React, { useEffect, useState } from 'react';
import './Election.css';
import axios from 'axios';
import Page from './Page';
import {navigate, useNavigate } from 'react-router-dom';
const Election = () => {
  const [formData, setFormData] = useState({ election: '', date: '', description: '' });
  const [electionListVisible, setElectionListVisible] = useState(false);
  const [message,setMessage]=useState(null);
  const navigate=useNavigate()
  const toggleElectionList = () => {
    setElectionListVisible(!electionListVisible);
  };
  const handleElectionSelect = (selectedElection) => {
    setFormData({ ...formData, election: selectedElection });
    setElectionListVisible(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit=(e)=>{
    axios.post(`http://localhost:3001/users/election`,formData)
    .then(res => {
      alert('Election created  successsfully')
      navigate('/Page')
  })
  .catch(err => console.log(err));
  }
 
  return (
    <div>
      <h1>Create Election</h1>
      <div className="container1">
        <input type="text" value='Create Election'placeholder="Create Election"/>
        <button className="button" onClick={toggleElectionList}>+</button>
      </div>
      {electionListVisible && (
        <div className='elect'> 
          <center><input type='text'   name='election' value={formData.election}  onChange={handleInputChange}required placeholder='Name of Election' /><br></br><br></br>
          <input id='name'type='date'   name='date' value={formData.date || ''}  onChange={handleInputChange}required  placeholder='Start Date'  /><br></br><br></br>
          <textarea   name='description' value={formData.description || ''}  onChange={handleInputChange}required  placeholder='Describe the election'  rows={5} cols={39} /><br></br><br></br>
          <button id='sbt' type='submit' onClick={handleSubmit}>Submit</button></center>
        </div>
      )}

    </div>
  );
};
export default Election;


