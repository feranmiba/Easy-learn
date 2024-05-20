import React from 'react'
import { FaFacebook, FaX, FaLinkedinIn, FaInstagram, FaMailchimp, FaPhone } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='text-[#FAF2F2] bg-[#24242a] pb-5'>
      <footer className=' flex-wrap gap-10 md:gap-0 md:flex-nowrap flex justify-between md:justify-around p-5 md:p-10'>



      
      <div className='font-thin'>
      <h4 className=' font-extrabold text-xl  sm:text-2xl mb-4'>For Students</h4>
      <p className=' text-sm md:text-base mt-2'>Become a student</p>
      <p className=' text-sm md:text-base  mt-2'>Courses</p>
      <p className=' text-sm md:text-base  mt-2'>Learning Experience</p>
      <p className=' text-sm md:text-base  mt-2'>Student Blog</p>
      </div>



       
      <div className='font-thin'>
      <h4 className=' font-extrabold text-xl  sm:text-2xl mb-4'>For Tutors</h4>
      <p className=' text-sm md:text-base  mt-2'>Become a Tutor</p>
      <p className=' text-sm md:text-base  mt-2'>Courses</p>
      <p className=' text-sm md:text-base  mt-2'>Teaching Experience</p>
      <p className=' text-sm md:text-base  mt-2'>Tutor Blog</p>
      </div>



       
      <div className='font-thin'>
      <h4 className=' font-extrabold  mb-4 text-xl  sm:text-2xl'>For Students</h4>
      <p className=' text-sm md:text-base  mt-2'>Sign up</p>
      <p className=' text-sm md:text-base  mt-2'> Sign in</p>
      <p className=' text-sm md:text-base  mt-2'>FAQs</p>
      <p className=' text-sm md:text-base  mt-2'>Student Blog</p>
      </div>



       
      <div className='font-thin'>
      <h4 className=' font-extrabold  text-xl  sm:text-2xl'>Follow us </h4>
     <div className='flex gap-4 mb-4 mt-4'>
     <FaFacebook className='text-lg md:text-xl'/> <FaLinkedinIn className='text-lg md:text-xl'/> <FaX className='text-lg md:text-xl'/> <FaInstagram className='text-lg md:text-xl'/> 
     </div>

     <h4 className=' font-extrabold text-xl  sm:text-2xl'>Contact us</h4>
     <div className='flex gap-4 mb-4 mt-4'>
     <FaMailchimp className='text-lg md:text-xl'/> <FaPhone className='text-lg md:text-xl'/>
     </div>
      </div> 
      
      
      </footer>


      <div className='text-center'>
      copyright feranmi
      </div>
    </div>
  )
}

export default Footer
