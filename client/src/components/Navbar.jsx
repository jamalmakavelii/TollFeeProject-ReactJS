import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = ({ role }) => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link to="/" className='navbar-brand'>Home</Link>
      </div>
      <div className='navbar-right'>
        {role === "admin" && <>
          <Link to="/addtollgate" className='navbar-link'>Add Tollgate</Link>
          <Link to="/adduser" className='navbar-link'>Add User</Link>
          <Link to="/dashboard" className='navbar-link'>Dashboard</Link>
        </>}
        {role === "" ?
          <Link to="/login" className='navbar-link'>Login</Link>
          : <>
          <Link to="/tollgates" className='navbar-link'>Toll Calculator</Link>
          <Link to="/logout" className='navbar-link'>Logout</Link> 
          </>
        }
      </div>
    </nav>
  );
};

export default Navbar;