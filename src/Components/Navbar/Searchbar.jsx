import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchfilter } from '../../redux/Productslice'
import { useNavigate } from 'react-router-dom'
function Searchbar() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [search,setsearch]=useState("")
  const submit=(event)=>{
    event.preventDefault()
   dispatch(searchfilter(search))
   navigate('/filter')
  }
  return (
   <form className='hidden gap-1 items-center md:flex' onSubmit={submit}>
    <input type="text" className='h-[24px] mt-2 w-[150px] text-black
     bg-white'placeholder='search products' onChange={(e)=>setsearch(e.target.value)}/>
    <button type="submit" className='text-white px-3 mt-2 bg-blue-600'>Search</button>
    </form>
  )
}

export default Searchbar
