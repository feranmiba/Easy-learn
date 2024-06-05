import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <motion.div initial={{  opacity: 0}}
    animate={{ opacity:1}}
    transition={{ duration: 1.55}} className='text-[#FAF2F2] p-7'>
      <p className='text-center text-xl md:text-2xl font-extrabold pb-5'>Picking a plan is a great way to start <br/>learning on our platform.</p>
      <section className='flex px-5 py-5 justify-around flex-wrap gap-10 lg:gap-0 md:flex-nowrap'>

    <div className='px-8 py-10 text-center bg-[#2E303E] shadow-xl rounded-xl'>
    <p className='text-xl font-bold'>Free</p>
    <p className='mt-3'>For quick users or learners</p>

    <p className='mt-3'><b>$0</b></p>

   <Link to="/signup" ><button className='mt-3 px-8 py-3 rounded-lg bg-[#306136]'>Start for free</button></Link> 
    
    <ul className='mt-5'>
    <li className=' border-t-2 py-2'>Access to 2 courses</li>
    <li  className=' border-t-2 py-2'>Limited courses to enroll</li>
    <li  className=' border-t-2 py-2'>Access to tutorial videos</li>
    <li  className=' border-t-2 py-2'>Access to our Whatsapp group chat</li>
    </ul>
    </div>



    <div className='px-8 py-10 text-center text-[#FAF2F2] bg-[#2E303E] shadow-xl rounded-xl'>
    <p className='text-xl font-bold'>Basic</p>
    <p className='mt-3'>For quick users or learners</p>

    <p className='mt-3'><b>$5</b></p>

    <button className='mt-3 px-8 py-3 rounded-lg bg-[#2B4D5F]'>Start for free</button>
    
    <ul className='mt-5'>
    <li className=' border-t-2 py-2'>Access to 10 courses</li>
    <li  className=' border-t-2 py-2'>Limited courses to enroll</li>
    <li  className=' border-t-2 py-2'>Access to tutorial videos</li>
    <li  className=' border-t-2 py-2'>Access to our Whatsapp group chat</li>
    </ul>
    </div>





    <div className='px-8 py-10 text-center text-[#FAF2F2] bg-[#2E303E] shadow-xl rounded-xl'>
    <p className='text-xl font-bold'>Pro</p>
    <p className='mt-3'>For quick users or learners</p>

    <p className='mt-3'><b>$10</b></p>

    <button className='mt-3 px-8 py-3 rounded-lg bg-[#274470]'>Start for free</button>
    
    <ul className='mt-5'>
    <li className=' border-t-2 py-2'>Unlimited courses</li>
    <li  className=' border-t-2 py-2'>Unlimited courses to enroll</li>
    <li  className=' border-t-2 py-2'>Access to tutorial videos</li>
    <li  className=' border-t-2 py-2'>Access to our Whatsapp group chat</li>
    </ul>
    </div>



    
      
      
      </section>
    </motion.div>
  )
}

export default Pricing
