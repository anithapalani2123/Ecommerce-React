import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import axios from 'axios';
const Login = () => {
    const nav=useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const emailInputHandler = (event) => {
        setEmail(event.target.value);

    }
    const PasswordHandler = (event) => {
        setPassword(event.target.value);
        
    }
    const formSubmitHandler = async(event) => {
        event.preventDefault();
        // console.log("Clicked..");
        console.log(email,password);
        try{
            const response = await axios.post(`https://ecommerce-practice-chi.vercel.app/api/v1/auth/signin`,{
                user:{
                    userNameOrEmail:email,
                    password:password,
                },
            });
            sessionStorage.setItem('token',response.data.data.token)
            console.log(response.data)
            console.log(response.data.data.token);
            alert("successfully login");
            nav('/');


        }
        catch(error){
            alert(error.response.data.message)
            console.log(error);
        }
    }



  return (

    

    <form onSubmit={formSubmitHandler}>
        <div className="LoginContainer">
            <h3>Login</h3>
            <div className="Login">
                <label htmlFor="Email"></label>
                <input 
                type="email" 
                id='Email'  
                placeholder='Email'
                onChange={emailInputHandler}
                />
                <label htmlFor="password"></label>
                <input 
                type="password" 
                id='password'  
                placeholder='Password'
                onChange={PasswordHandler}
                />
                {/* <div className="LoginPassword">
                    <div className="showPass">
                        <input type="checkbox" id='showPassword' />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>
                    <p>Forget Password</p>
                </div> */}
                <button type='submit'>LOGIN</button>

            </div>
            <p>Don't have an account? <Link to='/auth/signup'>Sign Up</Link></p>
        </div>
        

    
    </form>
  )
}

export default Login
