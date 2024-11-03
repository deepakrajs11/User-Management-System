import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">User Management System</a>
  
   
         
    <Link className="btn btn-outline-light" to={`/adduser`}>Add User</Link>

    </div>
 
</nav>
    </div>
  )
}
