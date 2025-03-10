/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react'
import { PulseLoader } from 'react-spinners';

import { FaStar, } from 'react-icons/fa'
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setproductdetail, setproducts } from '../../redux/Productslice';
import { Link } from 'react-router-dom';
import { addtocart } from '../../redux/Cartslice';
import Categorys from '../Categorys';
import { productfetch } from '../Api';
function Products() {
  const {allproduct}=useSelector(state=>state.product)
  const dispatch=useDispatch()
    const allproductfetchs=async()=>{
    const data=await productfetch();
    dispatch((setproducts(data)))
    }
    useEffect(()=>{
    allproductfetchs()
    },[])
   
  return (
    <>
    <div className='w-full mt-[130px] md:mt-[70px] '>
      <Categorys/>
      <div className='bg-blue-700 text-center text-white py-2 font-bold text-2xl'>Our Products</div>
       
    <div className='w-full mt-5 min-h-[900px] overflow-y-auto px-6 md:px-10 gap-y-8 gap-x-2 
     md:gap-x-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {allproduct?.map((a)=>(
          <Link to="/details">
    <div onClick={()=>dispatch(setproductdetail(a))} className='h-[300px] relative 
    text-center space-y-2 font-bold  bg-white shadow-md rounded-lg shadow-gray-300'key={a.id}>
   <img className='h-[50%] w-full' src={a.image}/>
   
   <p>{a.title.slice(0,40)}</p>
   <div className='w-full flex items-center justify-center'><FaStar/>{a.rating.rate}</div>
   <p>${Math.floor(a.price)}</p>
   
    <div onClick={()=>dispatch(addtocart(a))} className='p-2 rounded-full bg-white shadow-md absolute bottom-2 right-2
     shadow-gray-300'> <FaCartShopping className='text-xl  '/></div>
    </div>
   
    </Link>
))}
    </div>
    </div>
    </>
  )
}

export default Products
