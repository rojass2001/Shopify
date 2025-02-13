import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
function Loginorregister({buttonname,des,link}) {
    
  return (
    <div className='w-full p-2 min-h-screen bg-gray-100 place-content-center place-items-center'>
      <div className='w-full   md:w-[50%] lg:w-[23%] place-content-center py-2 px-2 font-bold  bg-white 
      min-h-[250px] space-y-3 border-[6px] border-blue-700 text-blue-700 rounded-lg sm:w-full md:min-h-[350px]'>
       <label for="uname">Enter Name</label>
       <input className="border-2 h-12 w-full border-black" name="uname" placeholder='enter username'/>
       <label for="pass">Enter Password</label>
       <input name="pass" type="password"className='border-2 h-12 w-full  border-black'  
       placeholder='enter password'/>
       <p className=''>forget password?</p>
       <Link to={link}><p className='text-sm text-center text-blue-700 mt-2'>{des}</p></Link>
       <div className='w-full text-center text-white'>
        <button  className='w-[110px] mt-3 bg-blue-700 h-9'>{buttonname}</button>
        </div>
      </div>
    </div>
  )
}
export default Loginorregister