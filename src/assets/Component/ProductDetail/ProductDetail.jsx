import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import image from "../images/bag.png";
import IMAGE_URL from "../../../info.js"
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const navigate=useNavigate();
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  console.log("Params :", id);
  // console.log(image);
  const fetchProductById = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce-practice-chi.vercel.app/api/v1/product/${id}`
      );
      console.log(response.data);
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
      const response=await axios.delete(`https://ecommerce-practice-chi.vercel.app/api/v1/product/${id}`);

      alert("deleted successfully")
      nav('/');
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
            <div className="Btns">
              <button onClick={()=>updateHandler(product._id)}>Update</button>
              <button onClick={DeleteHandler}>Delete</button>

            </div>
          </div>
          
          
          {/* <Link to={`/product/${product._id}`}>View Details</Link> */}
        </div>}

      </div>

     
    </>
  );
};

export default ProductDetail;
