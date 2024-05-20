import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
    <nav className='hidden md:block '>
      <section className='flex bg-[#242832] justify-between shadow-xl px-10 py-2 text-[#FAF2F2]'>


      <div className=' leading-none'>
      <h1 className=' text-2xl font-extrabold'>Easy</h1>
      <p className=' text-lg font-bold ml-4'>Learning</p>
      </div>


      <div>
      <ul className='flex gap-10 lg:text-lg pt-3'>
    <Link to="/"><li>Home</li></Link>  
     <Link to="/pricing"><li>Pricing</li></Link> 
      <li>About us</li>
      <li>FAQs</li>
      </ul>
      </div>


      <div className='flex pt-2'>
     <p className='px-3'>
     <Link to="/signup"><button className='border px-4 lg:px-6 py-2 rounded-xl bg-[#F8EEEE] font-semibold text-[#242832] hover:bg-transparent hover:text-white transition-all'>Sign up</button></Link> </p>
     <p className='px-3'> 
     <Link to="/login"><button className='border px-6 lg:px-8 py-2 rounded-xl font-semibold hover:bg-[#F8EEEE] hover:text-[#242832] transition-all'>Sign in</button></Link></p>
      </div>
      
      
      
      </section>
      </nav>
    </div>
  )
}

export default Nav
