
import axios from 'axios';
import React, { useState } from 'react';
import PageTable from './PageTable';
import  "./Page.css";
import { useNavigate } from 'react-router-dom';
export default function Page() {
    const navigate=useNavigate()
    const [Data, setData] = useState({
        name: '',
        img: '',
        desc: '',
    });

    const handleChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Data);
        axios.post(`http://localhost:3001/users/candidates`,Data)
            .then(res => {
                alert(" Candidate Information added successfully");
                setData({ name: '',img: '', desc: '' });
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1 className='title'>Upload Candidate Information</h1>
            <div className='formContainer'>
                <form className='form1'>
                    <br></br>
                   <label>Candidate Name</label> <br></br>
                    <input type='text' name='name' value={Data.name} placeholder='Enter Candidate Name..'onChange={handleChange} required/><br />

                    <label>Candidate Image</label><br></br>
                    <input type='text' name='img' value={Data.img} placeholder='Upload Candidate image..'onChange={handleChange} required/><br />
                    
                    <label>Candidate Description</label><br></br>
                    <textarea name='desc' value={Data.desc} placeholder='Enter Candidate description... 'onChange={handleChange} rows={5} cols={38} required/><br />
                    <br></br>
                    <button type='submit' style={{backgroundColor:"green",border:"none",height:"30px",width:"150px",borderRadius:"10px",color:"white",cursor:"pointer",fontStyle:"italic"}} onClick={handleSubmit}>+Upload Details</button>
                </form>
            </div>
            <PageTable/>
        </div>
    );
}
