import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cartsubtotal() {
  const {totalprice,cartproducts}=useSelector(state=>state.cart)
  return (
    <div className='w-full relative space-y-2 min-h-[200px]  text-blue-700 font-bold border-[4px] border-blue-600'>
    <div className='flex justify-between text-white w-full py-2
     bg-blue-600'>Total Items:<span>{cartproducts.length}</span>
     </div>
     <div className='flex w-full p-2 justify-between'>Subtotal:<span>${totalprice}</span></div>
     <div className='flex w-full p-2 justify-between  '>TotalPrice:<span>${totalprice}</span></div>
    <div className='w-full px-1 flex justify-center  absolute bottom-1 py-2 gap-2 text-white '>
      <button className='w-[120px] h-8 bg-blue-700'>Buynow</button>
<Link to="/products"><button  className='w-[120px] h-8  bg-blue-700'>Continue Shop</button></Link>
    </div>
    </div>
  )
}

export default Cartsubtotal
