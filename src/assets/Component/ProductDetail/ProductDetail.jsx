import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import image from "../images/bag.png";
import {IMAGE_URL} from "../../../info.js"
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const navigate=useNavigate();
  const [role,setRole]=useState("");
  // const [productId,setProductId]=useState();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  

  useEffect(()=>{
    setRole(sessionStorage.getItem("role"));

  },[])

  console.log("Params :", id);
  // console.log(image);
  const fetchProductById = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce-practice-chi.vercel.app/api/v1/product/${id}`
      );
      console.log(response.data);
      
      // setProductId(response.data._id);
      // console.log(response.data.data);

      setProduct(response.data.data);
    } catch (error) {
     
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, []);

  const updateHandler=(id)=>{
    navigate(`/product/update/${id}`)

  }
  const DeleteHandler= async()=>{
    try{
      const token=sessionStorage.getItem("token")
      const response=await axios.delete(`https://ecommerce-practice-chi.vercel.app/api/v1/product/${id}`,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );

      alert("deleted successfully")
      navigate('/');
    }
    catch(error)
    {
      console.log(error)
    }
  }
  const cartHandler=async() =>{
    
    try{
      const token=sessionStorage.getItem('token');
      const response=await axios.post(`https://ecommerce-practice-chi.vercel.app/api/v1/cart`,{
        product:{
          productId:id
        },
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      
      console.log(response.data.data)
    }
    catch(error)
    {
      console.log(error)
    }



  }

  return (
    <>
      <div className="ProductDetail">
        {product && <div
          className="Singlecontainer">
          <div className="Singlecontainer1">
            <img src={`${IMAGE_URL}/${product.imageName}`} alt="image" />
          </div>
          <div className="Singlecontainer2">
            <div className="header">
              <p>{product.name}</p>
              <p>{product.description}</p>

            </div>
            <p id="price">price:{product.price}</p>
            <div className="category">
              <p>quantity:{product.quantity}</p>
              <p>category:{product.category}</p>

            </div>
            <div>
              <button onClick={cartHandler}>Add to Cart</button>
            </div>

            {
              role==="admin" && <div className="Btns">
              <button onClick={()=>updateHandler(product._id)}>Update</button>
              <button onClick={DeleteHandler}>Delete</button>

            </div>
            }
            
          </div>
          
          
          {/* <Link to={`/product/${product._id}`}>View Details</Link> */}
        </div>}

      </div>

     
    </>
  );
};

export default ProductDetail;
