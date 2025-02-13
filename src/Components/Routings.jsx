import React from 'react'
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import Hero from './Hero'
import DesktopNav from './Navbar/DesktopNav'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Footer from './Footer'
import Productdetail from './Pages/Productdetail'
import AllProducts from './Pages/AllProducts'
import Filter from './Pages/Filter'
import Login from './Pages/Loginorregister/Login'
import Register from './Pages/Loginorregister/Register'
import Contact from './Pages/Contact'

function Routings() {
  return (
    <div className='w-full'>
      <Router>
      <DesktopNav/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<Productdetail/>} />
        <Route path="/products" element={<AllProducts/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/filter" element={<Filter/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contact/>} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default Routings
