import React from 'react'
import { Link } from 'react-router-dom'
import girl from '../Image/girls-book.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import About from './About';

function Home() {
  return ( 
    <div className=' text-[#FAF2F2] '>
      <section className='flex flex-col-reverse md:flex-row  md:flex md:justify-between p-8 lg:p-14'>



      <motion.div   initial={{ x: -250, opacity:0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 100,
        duration: 0.4
      }} className=' py-32 md:px-0 lg:px-16'>
        <div>
          <h1 className='text-2xl md:text-3xl lg:text-4xl  font-extrabold'>  Learning made easy</h1>
          <p className='py-3 font-thin  lg:w-[90%]'>Easy learning is an online learning platform which believes that education should be accessible to all, regardless of geographical location or background.</p>

          <div className='flex lg:pt-2'>
          <p className='px-3'>
          <Link to="/signup"><button className='flex gap-3 border px-7 lg:px-10 py-2 rounded-xl bg-[#F8EEEE] font-semibold text-[#242832] hover:bg-transparent hover:text-white transition-all'>Start Learning <FaArrowRightLong className='mt-1'/></button></Link> </p>
           </div>
           
        </div>  


      </motion.div>



      <motion.div   initial={{ opacity:0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.2,
        stiffness: 150,
        duration: 1.5
      }} className='w-[100%] md:pt-16 lg:pt-0'>
      <img src={girl} alt='girl'/>
      </motion.div>
      </section>


      <About/>
    </div>
  )
}

export default Home
