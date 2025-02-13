
import { Link } from 'react-router-dom'
const mobilenav=[{name:"Home",link:"/"},
    {name:"About",link:"/about"},
    {name:"Products",link:"/products"},
    {name:"Contact",link:"/contact"}]
function Mobilenavbar({navbarpopup}) {
  return (
    <div className='bg-blue-800 pt-10 place-items-center absolute h-screen top-0 left-0 w-[92%]'>
       <div className='text-white text-2xl  font-bold'>
        {mobilenav.map((a)=>(
  <Link to={a.link} > <p onClick={()=>navbarpopup()} className='mb-7' key={a.name} >{a.name}</p></Link>
)) }
        </div>
    </div>
  )
}

export default Mobilenavbar
