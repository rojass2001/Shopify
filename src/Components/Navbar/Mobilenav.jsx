import React from 'react'
function Mobilenav() {
  return (
    <div className='primary p-2 md:hidden w-full justify-center  '>
     <form className=' flex gap-1 items-center '>
    <input type="email" className='h-[38px] mt-2 w-full text-black
     bg-white'placeholder='search products'/>
    <button className='p-2 mt-2 rounded-full bg-white text-blue-600 font-bold'>Search</button>
    </form>
    </div>
  )
}

export default Mobilenav
