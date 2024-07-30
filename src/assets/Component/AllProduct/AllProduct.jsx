import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import './AllProduct.css'
import image from '../images/bag.png'
import { useState,useEffect } from 'react'
import ProductDetail from '../ProductDetail/ProductDetail';
import { IMAGE_URL } from '../../../info';
const AllProduct = () => {
    const [products,setProducts]=useState([]);
    const navigate=useNavigate();
    async function fetchProduct(){
        try{
            const response= await axios.get("https://ecommerce-practice-chi.vercel.app/api/v1/product");
            // console.log(response);
            // console.log(response.data);
            setProducts(response.data.data)
            console.log(response.data.data);
        }
        catch(error){
            console.log(error);

        }
    }
    useEffect(()=>{
        fetchProduct();
    },[])
    const productHandler=(id)=>{
        console.log(id)
        navigate(`/product/${id}`);
        // <ProductDetail/>
    }
  return (
    <div>
        <div className='ProductContainer' >
            {products.map((product,index)=>(
                <div className='Product' key={index} onClick={() => productHandler(product._id)}>
                    <img src={`${IMAGE_URL}/${product.imageName}`} alt="image" />
                    <div className='desc'>
                        <p id='name'>{product.name}</p>
                        <p>{product.description}</p>
                    </div>
                    <div className='rate'>
                        <p>Rs.{product.price}</p>
                    </div>
                    <div className='quantity'>
                        <p>quantity:{product.quantity}</p>
                        <p>category:{product.category}</p>

                    </div>
                        
                    
                    
                    {/* <Link to={`/product/${product._id}`}>View Details</Link> */}
                </div>

            ))}
        </div>
      
    </div>
  )
}

export default AllProduct
