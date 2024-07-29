import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
const Update = () => {
  const navigate=useNavigate();
  const {id}=useParams();
  const [name,setName]=useState("");
  const [description,setdescription]=useState("");
  const [quantity,setquantity]=useState();
  const [price,setprice]=useState();
  const [category,setcategory]=useState("");

  const NameHandler=(event)=>{
    setName(event.target.value);

  }
  const descriptionHandler=(event)=>{
    setdescription(event.target.value);

  }
  const quantityHandler=(event)=>{
    setquantity(event.target.value);

  }
  const priceHandler=(event)=>{
    setprice(event.target.value);

  }
  const categoryHandler=(event)=>{
    setcategory(event.target.value);

  }
  const getfunction=async (event)=>{
    try{
      const response=await axios.get(`https://ecommerce-practice-chi.vercel.app/api/v1/product/${id}`)

      console.log(response.data.data)
      const productData=response.data.data
      setName(productData.name);
      setdescription(productData.description)
      setquantity(productData.quantity)
      setprice(productData.price)
      setcategory(productData.quantity)
     
    }
    catch(error)
    {
      console.log(error)
    }
  }
  useEffect(()=>{
    getfunction();
},[])
  //formsubmitfunction
  const updateFormSubmit=async(event)=>{
    event.preventDefault();
    console.log(name,description,quantity,price,category);
    try{
      const response=await axios.put(`https://ecommerce-practice-chi.vercel.app/api/v1/product/${id}`,{

        product:{
          name:name,
          description:description,
          quantity:quantity,
          price:price,
          category:category,
        }
          
        });
        navigate(`/product/${id}`);
      console.log(response.data.data);
      

    }
    catch(error)
    {
      alert(error)
      console(error);
    }

  }

  
  return (
    <div>
      <form onSubmit={updateFormSubmit}>
      <div className="AddContainer">
            <h3>UPDATE Product</h3>
            <div className="Add">
                <label htmlFor="name"></label>
                <input type="text" 
                id='name'
                placeholder='name'
                onChange={NameHandler}
                value={name}/>
                <label htmlFor="description"></label>
                <input
                type="text"
                 id='description' 
                  placeholder='description'
                  onChange={descriptionHandler}
                  value={description}/>
                
                <label htmlFor="quantity"></label>
                <input type="number"
                 id='quantity' 
                  placeholder='quantity'
                  onChange={quantityHandler}
                  value={quantity}/>
                <label htmlFor="price"></label>
                <input type="number"
                 id='price' 
                  placeholder='price'
                  onChange={priceHandler}
                  value={price}/>
                <label htmlFor="category"></label>
                <input type="text"
                 id='category' 
                  placeholder='category'
                  onChange={categoryHandler}
                  value={category}/>
                <button type='submit'>UPDATE</button>

            </div>
            
        </div>
    </form>
      
    </div>
  )

}

export default Update
