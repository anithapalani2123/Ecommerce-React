import React, { useState } from 'react'
import axios from 'axios'
import './Add.css'
import { useNavigate } from 'react-router-dom';
const Add = () => {
  const nav=useNavigate();
  const [name,setName]=useState("");
  const [description,setdescription]=useState("");
  const [quantity,setquantity]=useState();
  const [price,setprice]=useState();
  const [category,setcategory]=useState("");
  const[file,setFile]=useState();

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
  const fileHandler=(event)=>{

    setFile(event.target.files[0])
  }
  //formsubmitfunction
  const AddFormSubmit=async(event)=>{
    event.preventDefault();
    console.log(name,description,quantity,price,category)
    const formData=new FormData();
    formData.append('image',file);

    try{
      
      const imageResponse= await axios.post('https://ecommerce-practice-chi.vercel.app/api/v1/upload',formData)
      console.log(imageResponse);
      if(imageResponse.status!==201)
      {
        throw new Error("file not uploaded")
      }
      const response=await axios.post('https://ecommerce-practice-chi.vercel.app/api/v1/product',{
          product:{
            name:name,
            description:description,
            quantity:quantity,
            price:price,
            category:category,
            imageName:imageResponse.data.cldRes.display_name
          }
        });
      console.log(response.data.data);
      nav('/');

    }
    catch(error)
    {
      alert(error)
      console.log(error);
    }

  }
  
  return (
    <div>
      <form onSubmit={AddFormSubmit}>
      <div className="AddContainer">
            <h3>ADD Product</h3>
            <div className="Add">
                <label htmlFor="name"></label>
                <input type="text" 
                id='name'
                placeholder='name'
                onChange={NameHandler}/>
                <label htmlFor="description"></label>
                <input
                type="text"
                 id='description' 
                  placeholder='description'
                  onChange={descriptionHandler}/>
                
                <label htmlFor="quantity"></label>
                <input type="number"
                 id='quantity' 
                  placeholder='quantity'
                  onChange={quantityHandler}/>
                <label htmlFor="price"></label>
                <input type="number"
                 id='price' 
                  placeholder='price'
                  onChange={priceHandler}/>
                <label htmlFor="category"></label>
                <input type="text"
                 id='category' 
                  placeholder='category'
                  onChange={categoryHandler}/>
                  <label htmlFor="file"></label>
                  <input type="file"
                  onChange={fileHandler} />
                <button type='submit'>ADD</button>

            </div>
            
        </div>
    </form>
      
    </div>
  )
}

export default Add
