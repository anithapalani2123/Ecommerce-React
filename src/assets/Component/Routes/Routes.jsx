import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProductDetail from '../ProductDetail/ProductDetail';
import Add from '../Add/Add';
import Update from '../Update/Update';
import Otp from '../Otp/Otp';
import Error from '../Error/Error';
const RoutesPath = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/auth/signin' element={<Login/>}></Route>
            <Route path='/auth/signup' element={<Register/>}></Route>
            <Route path='/product/new' element={<Add/>}></Route>
            <Route path='/product/update/:id' element={<Update/>}></Route>
            <Route path='/product/:id' element={<ProductDetail/>}></Route>
            <Route path='/auth/otp/:id' element={<Otp/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
        

      
    </div>
  )
}

export default RoutesPath;
