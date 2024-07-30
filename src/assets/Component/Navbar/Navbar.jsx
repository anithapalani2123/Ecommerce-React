import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [userName,setUserName]=useState("");
  useEffect(()=>{
    setUserName(sessionStorage.getItem("userName"));
  },[])
  console.log(sessionStorage.getItem("userName"))
  const LogoutHandler=()=>{
    sessionStorage.clear()
    setUserName("")
  }
  return (
    <div className='Header'>
      <div className="sec1">
        <Link to='/' className='linktag'><p>Home</p></Link>
        <Link to='/product/new' className='linktag'><p>Add</p></Link>
      </div>
      {!userName && <div className="sec2">
        <Link to='/auth/signin' className='linktag'><p>Login</p></Link>
        <Link to='/auth/signup' className='linktag'><p>Register</p></Link> 

      </div>}
      {
        userName && <div className="sec2">

          <p>{userName}</p>
          <button onClick={LogoutHandler}>Logout</button>
        </div>
      }
        
        
    </div>
  )
}

export default Navbar
