import React from 'react'
import { CiLogin } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function Loginicon() {
  return (
    <>
    <Link to="/login">
    <div className='flex '>
    <p className=''>Login</p>
    <div className='h-6 w-6 mr-1'><CiLogin className='text-2xl text-white '/> 
      </div>
    </div>
    </Link>
    </>
  )
}

export default Loginicon
