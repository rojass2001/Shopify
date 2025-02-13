import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setproductdetail, settopproducts } from '../redux/Productslice'
import { FaCartShopping, FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { addtocart } from '../redux/Cartslice'

function Topproducts() {
    const dispatch=useDispatch()
    const{topproducts}=useSelector(state=>state.product)
    const productfetch=async()=>{
        const response=await axios.get('https://fakestoreapi.com/products')
        dispatch(settopproducts(response.data))
       }
       useEffect(()=>{
       productfetch()
       },[])
    
   
  return (
    <div className='w-full'>
    <p className='text-3xl text-center mb-5 font-bold text-blue-600'>Our Top products</p>
    <div className='w-full bg-gray-100 py-2  px-2 gap-5 md:gap-15  grid grid-cols-2 md:grid-cols-3
     lg:grid-cols-3 font-bold lg:px-[150px] ' >
    {topproducts?.map((a)=>(

    <div onClick={()=>dispatch(setproductdetail(a))} className='min-h-[200px] py-2 space-y-2 relative place-items-center bg-white 
    text-black shadow-md shadow-gray-300' key={a.id}>
    <img className='w-full h-[100px]' src={a.image}/>
    <p>{a.title.slice(0,24)}</p>
    <p>${Math.floor(a.price)}</p>
    <p className='flex items-center'><FaStar/>{a.rating.rate}</p>
    <div onClick={()=>dispatch(addtocart(a))} className='p-2 rounded-full absolute bottom-2 right-2 text-xl bg-white shadow-md
     shadow-gray-300'><FaCartShopping  /></div>
   <Link to="/details">  <button className='bg-black text-white p-2 rounded-full '>
    More Details</button></Link>
    </div>

    ))}
    </div>
    </div>
  )
}

export default Topproducts
