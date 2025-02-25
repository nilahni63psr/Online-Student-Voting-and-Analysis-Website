import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageUpdate.css';

export default function PageUpdate({ data, setPopup, updateList }) {
  const [proddata, setProdData] = useState({
    name: data.name,
    img: data.img,
    desc: data.desc,
  });

  const handleChange = (e) => {
    setProdData({ ...proddata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    axios.put(`http://localhost:3001/users/candidates/${data._id}`,proddata)
      .then((res) => {
        alert("Candidate information updated successfully");
        updateList(res.data);
        setPopup(false); 
      })
      .catch((err) => {
console.log(err)
        alert("Failed to update candidate. Please try again.");
      });
  };

  return (
    <div className='popup'>
      <center>
        <form onSubmit={handleSubmit}> 
          <button type="button" onClick={() => setPopup(false)} style={{ height: "30px", width: "70px" }}>x</button><br />
          <label>Candidate Name</label><br />
          <input type='text' name='name' value={proddata.name} onChange={handleChange} placeholder='Enter Candidate Name' /><br />
          <label>Candidate Image</label><br />
          <input type='text' name='img' value={proddata.img} onChange={handleChange} placeholder='Upload Candidate Image' /><br />
          <label>Candidate Description</label><br />
          <textarea name='desc' value={proddata.desc} onChange={handleChange} placeholder='Enter Candidate Description' rows={5} cols={40}></textarea><br></br>
          <button type='submit' id='pop'>Submit</button> 
        </form>
      </center>
    </div>
  );
}