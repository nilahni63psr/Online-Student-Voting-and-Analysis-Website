import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Details.css';

export default function Details() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [name, setElectionName] = useState("");
    const [winner, setWinner] = useState(null); 

    useEffect(() => {
        axios.get(`http://localhost:3001/users/candidates`)
            .then(res => {
                const candidatesWithVotes = res.data.map(candidate => ({
                    ...candidate,
                    votes: candidate.votes || 0
                }));
                setList(candidatesWithVotes);
                const validCandidates = candidatesWithVotes.filter(candidate => candidate.votes > 0);
                
                if (validCandidates.length > 0) {
                    const winnerCandidate = validCandidates.reduce((max, candidate) => {
                        return (candidate.votes > max.votes) ? candidate : max;
                    }, validCandidates[0]);
                    setWinner(winnerCandidate); 
                } else {
                    setWinner(null); 
                }
                console.log(res);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:3001/users/elections`)
            .then(response => {
                if (response.data.length > 0) {
                    const name = response.data.map(admin => admin.election);
                    setElectionName(name);
                }
            })
            .catch(err => {
                console.error("Error fetching election name", err);
            });
    }, []);

    const handleVote = (_id) => {
        axios.patch(`http://localhost:3001/users/candidates/${_id}`)
            .then(response => {
                const updatedList = list.map(candidate => {
                    if (candidate._id === _id) {
                        return { ...candidate, votes: response.data.message.votes };
                    }
                    return candidate;
                });
                setList(updatedList);
                const validCandidates = updatedList.filter(candidate => candidate.votes > 0);

                if (validCandidates.length > 0) {
                    const newWinner = validCandidates.reduce((max, candidate) => {
                        return (candidate.votes > max.votes) ? candidate : max;
                    },validCandidates[0]);

                    setWinner(newWinner); 
                } else {
                    setWinner(null); 
                }

                alert("Thank you for voting!!");
                navigate('/');
            })
            .catch(err => {
                console.error("Error updating vote count:", err);
                alert("Failed to vote. Please try again.");
            });
    };

    return (
        <div className='pro'>
            <div>
                <h1>{name}</h1>
                {winner ? (
                    <div className="winner">
                        <h2>Leading: {winner.name}</h2>
                        <p>Votes: {winner.votes}</p>
                    </div>
                ) : (
                    <div className="winner">
                        <h2>No winner yet</h2>
                    </div>
                )}

                <table className="votenow">
                    <thead>
                        <tr>
                            <th>Candidate Name</th>
                            <th>Candidate Image</th>
                            <th>Candidate Profile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(x => (
                            <tr key={x._id}>
                                <td style={{ textAlign: "center" }}>{x.name}</td>
                                <td>
                                    <img src={x.img} width={100} height={100} style={{ borderRadius: "50%", marginLeft: "150px" }} alt={x.name} />
                                </td>
                                <td style={{ textAlign: "center" }}>{x.desc}</td>
                                <td>
                                    <center>
                                        <button className='now' onClick={() => handleVote(x._id)} style={{cursor:"pointer"}}>Vote Now</button>
                                        <span style={{ marginLeft: "10px" }}>Votes: {x.votes}</span>
                                    </center>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br>
            </div>
        </div>
    );
}
