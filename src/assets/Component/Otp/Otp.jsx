import React, { useState } from 'react'
import axios from 'axios'
import './Otp.css'
import { useParams,useNavigate } from 'react-router-dom';
const Otp = () => {
    const nav=useNavigate();
    const { id }=useParams();
    // const [Name,setName]=useState("");
    const [otp,setOtp]=useState();
    // const nameHandler=(event)=>{
    //     setName(event.target.value);
    // }
    const OtpHandler=(event)=>{
        setOtp(event.target.value);
    }

    const otpsubmit= async(event)=>{
        event.preventDefault();

        console.log(otp);
        try{
            const response=await axios.post(`https://ecommerce-practice-chi.vercel.app/api/v1/auth/otp/${id}`,{
                otp:otp
            });
            console.log(response.data.data)
            alert("successfully verified")
            nav('/')
        }
        catch(error)
        {
            alert(error)
            console.log(error);
        }
    }
  return (
    <>
    <form onSubmit={otpsubmit}>
        <div className='OtpContainer'>
            <h3>OTP verification</h3>
            <div className='otp'>
                {/* <label htmlFor="name"></label>
                <input type="text"
                placeholder='name'
                onChange={nameHandler} /> */}
                <label htmlFor="otp"></label>
                <input type="number"
                placeholder='otp' 
                onChange={OtpHandler}/>
            </div>
            <button type='submit'>Submit</button>

        </div>


    </form>


    </>
  )
}

export default Otp
