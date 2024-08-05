import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ProductDetail from "../ProductDetail/ProductDetail";
import Add from "../Add/Add";
import Update from "../Update/Update";
import Otp from "../Otp/Otp";
import Error from "../Error/Error";
import Cart from "../Cart/Cart";
const RoutesPath = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    setRole(sessionStorage.getItem("role"));
  }, []);
  return (
    // <div>
    //   {!role && (
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="/auth/signin" element={<Login />}></Route>
    //       <Route path="/auth/signup" element={<Register />}></Route>
    //       <Route path="/product/:id" element={<ProductDetail />}></Route>
    //       <Route path="/auth/otp/:id" element={<Otp />}></Route>
    //     </Routes>
    //   )}

    //   {role && role === "admin" && (
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="/product/new" element={<Add />}></Route>
    //       <Route path="/product/update/:id" element={<Update />}></Route>
    //       <Route path="/product/:id" element={<ProductDetail />}></Route>
    //     </Routes>
    //   )}

    //   {role && (
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="/cart" element={<Cart />}></Route>
    //       {/* <Route path="*" element={<Error />}></Route> */}
    //       <Route path="/product/:id" element={<ProductDetail />}></Route>
    //     </Routes>
    //   )}
    // </div>
    <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/new" element={<Add />}></Route>
          <Route path="/auth/signin" element={<Login />}></Route>
          <Route path="/auth/signup" element={<Register />}></Route>
          <Route path="/product/update/:id" element={<Update />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/auth/otp/:id" element={<Otp />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          {/* <Route path="*" element={<Error />}></Route> */}
      
    </Routes>
  );
};

export default RoutesPath;
