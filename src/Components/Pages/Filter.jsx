
import Categorys from '../Categorys'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../../redux/Cartslice'
import { setproductdetail } from '../../redux/Productslice'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa'

function Filter() {
    const dispatch=useDispatch()
const {filterproducts}=useSelector(state=>state.product)
  return (
    
    <div className='w-full mt-[130px] md:mt-[70px]  '>
    <Categorys/>
    {filterproducts.length<1?
    <div className='w-full mt-4 h-screen font-bold text-3xl text-center text-blue-600'>No Search Found</div>
    :
    <div className='w-full  mt-5 px-6 md:px-10 gap-y-8 gap-x-2 
      grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
        {filterproducts?.map((a)=>(
          <Link to="/details">
    <div onClick={()=>dispatch(setproductdetail(a))} className='h-[300px] relative 
    text-center space-y-2 font-bold  bg-white shadow-md rounded-lg shadow-gray-300' key={a.id}>
   <img className='h-[50%] w-full' src={a.image}/>
   
   <p>{a.title.slice(0,40)}</p>
   <div className='w-full flex items-center justify-center'>
    <FaStar/><p>{a.rating.rate}</p>
   </div>
   <p>${Math.floor(a.price)}</p>
   
    <div onClick={()=>dispatch(addtocart(a))} className='p-2 rounded-full bg-white shadow-md absolute bottom-2 right-2
     shadow-gray-300'> <FaCartShopping className='text-xl '/></div>
    </div>
   
    </Link>
))}
    </div>
}
    </div>
  )
}

export default Filter
