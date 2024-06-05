import React from 'react'

function Content() {
  return (
    <div className='sm:w-[65%] text-[#FAF2F2]'>
      <section className='p-5 rounded-xl bg-[#2E303E] shadow-xl'>
      

      <h1 className='border-b-2 pb-4'>Topic: <span className='text-2xl font-bold'>Getting started with English</span></h1>

      <p className='mt-2'>Get started by watching a video on English</p>
      <video></video>


      <div>
      <p>Note</p>

      <p> Coming soon </p>
      </div>
      

      <div className='flex justify-end mt-3'>
      <button className='shadow-xl px-5 py-1 rounded-lg bg-[#20212b]'>Next</button>
      </div>
      
      </section>
    </div>
  )
}

export default Content
