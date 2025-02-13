import React from 'react'
import { categoryarray } from './Categoryarray'
import { productwithcategory } from './Api'
import { useDispatch } from 'react-redux'
import { categoryfilter } from '../redux/Productslice'
import { useNavigate } from 'react-router-dom'
function Categorys() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const productcategorys=async(value)=>{
        const data=await productwithcategory(value)
       dispatch(categoryfilter(data))
       navigate('/filter')
    }
  return (
    <div className='w-full py-1 justify-start md:justify-center flex overflow-x-auto gap-[40px]'>
      {categoryarray.map((a)=>(
        <div className='' key={a.name}>
         <div onClick={()=>productcategorys(a.value)} className=' shadow-md shadow-gray-300 rounded-full 
         place-content-center bg-white text-center font-bold h-[95px] w-[95px] md:w-[120px] md:h-[120px] place-items-center   '>    
        <div  className=' h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full'> 
            <img className='w-full h-full rounded-full' src={a.image}/>
            </div>
            <p className='text-blue-600  text-sm'>{a.name}</p>
           
         </div>
       </div>
      ))
       
      }
    </div>
  )
}

export default Categorys
