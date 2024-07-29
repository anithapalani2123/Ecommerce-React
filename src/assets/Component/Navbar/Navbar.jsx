import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Header'>
      <div className="sec1">
        <Link to='/' className='linktag'><p>Home</p></Link>
        <Link to='/product/new' className='linktag'><p>Add</p></Link>
      </div>
      <div className="sec2">
        <Link to='/auth/signin' className='linktag'><p>Login</p></Link>
        <Link to='/auth/signup' className='linktag'><p>Register</p></Link> 

      </div>
        
        
    </div>
  )
}

export default Navbar
