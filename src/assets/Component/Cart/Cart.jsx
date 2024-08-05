import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Cart.css'

import { IMAGE_URL } from '../../../info';
const Cart = () => {
    const [cartData,setCartData]=useState([]);

    const fetchCart= async()=>{
        try{

            const token=sessionStorage.getItem('token')
            const response=await axios.get(`https://ecommerce-practice-chi.vercel.app/api/v1/cart`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(response.data)
            
            setCartData(response.data.data)

        }
        catch(error)
        {
            console.log(error)
            setCartData([])
        }
       
    }
    useEffect(()=>{
        fetchCart();
    },[])
  return (
    <div>
      
      {
        !cartData.length>0 && 
        <div>
            <p>Your cart is empty</p>
        </div>
      }
      {
        cartData.length>0 && 
        cartData.map((data,index)=>(
            <div key={index} className='cartContainer'>
              <div className='cart'>
                <img src={`${IMAGE_URL}/${data.productData.imageName}`} alt="" />
                <p>{data.productData.name}</p>
                <p>{data.productData.price}</p>
                <p>{data.productData.quantity}</p>
              </div>
              
                

            </div>
        ))
      }

    </div>
  )
}

export default Cart
