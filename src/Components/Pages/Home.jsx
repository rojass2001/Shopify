import React from 'react'
import Hero from '../Hero'
import Category from '../Category'
import Topproducts from '../Topproducts'
import Service from '../Service'

function Home() {
  return (
    <div className='w-full mt-[100px] md:mt-[60px]'>
     <Hero /> 
    <Category/>
  <Topproducts/>
  <Service/>
    </div>
  )
}

export default Home
