
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PageUpdate from './PageUpdate';
import "./PageTable.css";
import { useNavigate } from 'react-router-dom';
export default function PageTable() {
    const navigate=useNavigate()
    const[list,setList]=useState([])
    const[popup,setpopup]=useState(false)
    const[data,setData]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:3001/users/candidates`)
        .then(res=>setList(res.data))
        .catch(err=>console.log(err))
    },[])
    const handleEdit=(data)=>
    {
   setpopup(true)
   setData(data)
    }
    const updateList = (updatedCandidate) => {
        const updatedList = list.map(candidate => {
          if (candidate._id === updatedCandidate._id) {
            return updatedCandidate;
          }
          return candidate;
        });
        setList(updatedList);
      };
    const handleDel=(_id)=>{
        axios.delete(`http://localhost:3001/users/candidates/${_id}`)
        .then(()=>{
            alert("Candidate Information deleted successfully")
        })
        .catch(err=>console.log(err))
    }
      
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Information Uploaded Successfully")
        navigate('/')
    }
  return (
    <div>
        <table className="Table">
            <thead>
                <tr>
                    <th>Candidate Name</th>
                    <th>Candidate Image</th>
                    <th>Candidate Profile</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map(x=>(
                    <tr key={x.id}>
                        <td style={{textAlign:"center"}}>{x.name}</td>
                        <td><img src={x.img} width={70} height={70} style={{borderRadius:"50%",marginLeft:"130px"}}/></td>
                        <td style={{textAlign:"center"}}>{x.desc}</td>
                        <td>
                            <button onClick={()=>handleEdit(x)} style={{backgroundColor:"rebeccapurple",height:"25px",width:"90px",border:"none",borderRadius:"5px",color:"white",marginTop:"10px",marginLeft:"330px",cursor:"pointer"}}>Edit</button>
                           <br></br><button onClick={()=>handleDel(x._id)} style={{backgroundColor:"rebeccapurple",height:"25px",width:"90px",border:"none",borderRadius:"5px",color:"white",marginTop:"10px",marginLeft:"330px",cursor:"pointer"}}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br></br>
        <button type='submit' style={{backgroundColor:"green",height:"35px",width:"90px",border:"none",color:"white",cursor:"pointer",borderRadius:"5px",fontStyle:"italic",marginLeft:"650px"}} onClick={handleSubmit}>Submit</button><br></br>
        {popup && <PageUpdate data={data} setPopup={setpopup} updateList={updateList}/>}
    </div>
  )
}

