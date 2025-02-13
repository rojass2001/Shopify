import React, { useEffect, useState } from 'react'

function Progressbar() {
    const [hello,sethello]=useState(0);
    
    const progress=()=>{
        for(let i=0;i<=100;i+10)
        {   
          sethello(i)
        }
    }
  return (
    <div className='w-full pt-[200px] bg-red-500 h-screen'>
      <div className='w-[300px] bg-slate-800 p-2 h-[200px]'>
    <div className={`bg-yellow-500 transform transition-all  duration-1000 h-5 `} style={{width:`${hello}%`}} >
    
    </div>
      </div>
      <button onClick={progress} >start</button>
      <p>{hello}</p>
    </div>
  )
}

export default Progressbar
