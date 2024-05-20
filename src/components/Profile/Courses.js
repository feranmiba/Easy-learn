import React from 'react'
import { FaBook } from 'react-icons/fa6'

function Courses() {
  return (
    <div className='mt-8 md:mt-0 w-[100%] md:w-[65%] text-[#FAF2F2]'>
      <section className='p-5 bg-[#2E303E] shadow-xl rounded-lg'>
      <p className='border w-[100%] flex gap-2 p-2 rounded-lg'><FaBook className='mt-1'/> <input type='text' placeholder='Search for a course' className='w-[70%] outline-none bg-transparent px-2'/></p>

      <div className='mt-5'>
      <h1>Registered Courses <span className='px-3 py-1 bg-[#72421f] rounded-lg shadow-xl'>0</span></h1>


      <section className='flex flex-wrap justify-evenly mt-7 border-t-2 pt-5'>
      <div className='border pb-2 rounded-xl mt-5'>
      <div className='border px-14 py-5 rounded-t-xl bg-[#3d3d51]'>
      <h1>ENG</h1>
      </div>
      <div className='px-3 py-2'>
      <p>English</p>

      <button className='mt-3 border py-1 px-3 rounded-xl'>Enroll course</button>
      </div>
      </div>
      <div className='border pb-2 rounded-xl  mt-5'>
      <div className='border px-14 py-5 rounded-t-xl bg-[#3d3d51]'>
      <h1>ENG</h1>
      </div>
      <div className='px-3 py-2'>
      <p>English</p>

      <button className='mt-3 border py-1 px-3 rounded-xl'>Enroll course</button>
      </div>
      </div>
      <div className='border pb-2 rounded-xl  mt-5'>
      <div className='border px-14 py-5 rounded-t-xl bg-[#3d3d51]'>
      <h1>ENG</h1>
      </div>
      <div className='px-3 py-2'>
      <p>English</p>

      <button className='mt-3 border py-1 px-3 rounded-xl'>Enroll course</button>
      </div>
      </div>
      </section>

      </div>
      
      
      </section>
    </div>
  )
}

export default Courses
