import React from 'react'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



function MobileNav() {
  const [showModal, setShowModal] = useState(Boolean)
 

  const visibility = () => {
    setShowModal(!showModal)
  }




  return (
    <nav className='md:hidden'>
    <nav className='shadow-xl  text-[#FAF2F2]'>


    <div className='flex justify-between  px-8 py-5 '>
    <div className=' leading-none'>
      <h1 className=' text-2xl font-extrabold'>Easy</h1>
      <p className=' text-lg font-bold ml-4'>Learning</p>
      </div>


    <div className='mt-3 flex gap-5'>
    <p className='text-2xl cursor-pointer' onClick={visibility}> <FaBars /> </p>
    </div>
    </div>


<AnimatePresence mode='wait'  initial={false} >
  {showModal &&( 
   <motion.main
   initial={{
    y: -250
  }}
  animate={{
    y: 0
  }}
  exit={{
    y: -320
  }}
  transition={{
    delay: 0.2,
    type: "tween",
    stiffness: 100,
    duration: 0.8
  }}
   className="fixed top-0 z-50 bg-[#242832] px-8 py-3 w-[100%]">
 <p className='text-2xl flex justify-end cursor-pointer'  onClick={visibility}> 
 <FaTimes /></p>
    <ul className="flex flex-col gap-5 pt-2">
    <div>
      <ul className=' flex-col flex gap-8 text-lg pt-3'>
    <Link to="/"><li onClick={visibility}>Home</li></Link>  
     <Link to="/pricing"><li onClick={visibility}>Pricing</li></Link> 
      <li>About us</li>
      <li>FAQs</li>
      </ul>
      </div>


      <div className='flex pt-2'>
     <p className='px-3'>
     <Link to="/signup"><button className='border px-6 py-2 rounded-xl bg-[#F8EEEE] font-semibold text-[#242832] hover:bg-transparent hover:text-white transition-all' onClick={visibility}>Sign up</button></Link> </p>
     <p className='px-3'> 
     <Link to="/login"><button className='border px-8 py-2 rounded-xl font-semibold hover:bg-[#F8EEEE] hover:text-[#242832] transition-all' onClick={visibility}>Sign in</button></Link></p>
      </div>
    </ul>
    </motion.main>
      )}

      </AnimatePresence>
    </nav>
    </nav>
  )
}

export default MobileNav

