import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
export default function ViewUser() {
  
   const [user,setUser]=useState([]);
   const {id} =useParams();
   useEffect(()=>{loaduser();},[]);
   const loaduser=async ()=>{
    const result=await  axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data);
   }

  return (
   
        <div className="container" >
          <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 md-2 shadow'>
            <h2 class="text-center m-4">User Details</h2>  
            <table class="table border shadow light">
  
  <tbody>
  <tr>
    <td><b>User Id : </b></td>
    <td>{user.id}</td>
    </tr>
  <tr>
      <td><b>Name : </b></td>
      <td>{user.name}</td>
      </tr>
      <tr>
      <td><b>Username : </b></td>
      <td>{user.username}</td>
      </tr>
      <tr>
      <td><b>Email : </b></td>
      <td>{user.email}</td>
      </tr> 
  </tbody>
  </table>
  <Link  className="btn btn-primary m-4" to={"/"}>Back to Home</Link>  
  </div>
  </div>
</div>
  
  )
}
