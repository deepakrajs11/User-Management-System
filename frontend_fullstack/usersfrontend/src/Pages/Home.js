import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function Home() {
   const {id}=useParams();
    const[users,setusers]=useState([])
    useEffect(()=>{
      loadusers();
    },[])
    const loadusers= async()=>{
        const result=await axios.get("http://localhost:8080/users");
        setusers(result.data);
    }
   const deleteuser= async(id)=>{
    const result=await axios.delete(`http://localhost:8080/user/${id}`)
    alert(result.data);
    loadusers();
   }
  return (
    <div >    
    <div className='py-4 px-4'>
        <table class="table border shadow light">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className='table-group-divider'>
   { users.map((user,index)=>(
    <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
      <div className='container '>
      <Link  className="btn btn-outline-primary mx-2" to={`/user/${user.id}`}>View</Link>  
      <Link  className="btn btn-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
      <button type="button" className="btn btn-danger mx-2" onClick={(e)=>{deleteuser(user.id);}}>Delete</button>
      </div>
      </td>
    </tr>
   ))
    }
  
  </tbody>
</table>
    </div>
    </div>

  )
}
