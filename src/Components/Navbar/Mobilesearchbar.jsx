import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { searchfilter } from "../../redux/Productslice"

function Mobilesearchbar() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [search,setsearch]=useState("")
  const submit=(event)=>{
    event.preventDefault()
   dispatch(searchfilter(search))
   navigate('/filter')
  }
  return (
    <div className='primary p-2  w-full md:hidden justify-center  '>
     <form className=' flex gap-1 items-center ' onSubmit={submit}>
    <input type="text" className='h-[38px] mt-2 w-full text-black
     bg-white'placeholder='search products' onChange={(e)=>setsearch(e.target.value)}/>
    <button type="submit" className='p-2 mt-2 rounded-full bg-white text-blue-600 font-bold'>Search</button>
    </form>
    </div>
  )
}

export default Mobilesearchbar
