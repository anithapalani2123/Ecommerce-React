import React, { useState } from 'react'
import { toast } from 'react-toastify';
import {Link,useNavigate} from 'react-router-dom'
import './Register.css';
import axios from 'axios';
const Register = () => {
  const nav=useNavigate();
  const [UserName,setUserName]=useState("");
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const emailHandler=(event)=>{
    setEmail(event.target.value);

  }
  const PasswordHandler=(event)=>{
    setPassword(event.target.value)
  }
  const NameHandler=(event)=>{
    setName(event.target.value)
  }
  const UserNameHandler=(event)=>{
    setUserName(event.target.value)
  }
  //formSubmit
  const formSubmit = async(event)=>{
    event.preventDefault();

    console.log(email,password,UserName,name);
    try{
      const response=await axios.post(`https://ecommerce-practice-chi.vercel.app/api/v1/auth/signup`,{
        user:{
          userName:UserName,
          password:password,
          name:name,
          email:email
        },
      });
      
      console.log(response.data)
      console.log(response.data.data.id)
      toast.success("Account Created Successfully!")
      nav(`/auth/otp/${response.data.data.id}`);
    }
    catch(error){
      toast.error(error.response.data.message)
      console.log(error)
    }

  }
  return (
    <form onSubmit={formSubmit}>
      <div className="RegisterContainer">
            <h3>Registration</h3>
            <div className="Register">
                <label htmlFor="UserName"></label>
                <input 
                type="text"
                 id='UserName' 
                  placeholder='UserName'
                  onChange={UserNameHandler}/>
                <label htmlFor="name"></label>
                <input type="name" 
                id='name'
                placeholder='name'
                onChange={NameHandler}/>
                <label htmlFor="email"></label>
                <input type="email"
                 id='email' 
                  placeholder='Email'
                  onChange={emailHandler}/>
                <label htmlFor="password"></label>
                <input type="password"
                 id='password' 
                  placeholder='Password'
                  onChange={PasswordHandler}/>
                <button type='submit'>Register Now</button>

            </div>
            <p>Already have an account?<Link to='/auth/signin'>Login now</Link></p>
        </div>
    </form>
  )
}

export default Register
