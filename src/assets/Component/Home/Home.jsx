import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import AllProduct from '../AllProduct/AllProduct'

const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <Search/> */}
      <AllProduct/>
    </div>
  )
}

export default Home
