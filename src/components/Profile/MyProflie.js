import React from 'react'


function MyProflie({props}) {
  return (
    <div className='w-[30%] text-[#FAF2F2]'>
      <section className='p-8 rounded-xl bg-[#2E303E] shadow-xl'>
       <div className='text-center'>
      <h1><b> Name</b>: {props.profileName}</h1>
      <p className='mt-2'><b>Email</b>: {props.profileEmail}</p>
      </div>
      <div className='mt-5'>
        <div  className='flex justify-between font-bold'>
        <p>Courses </p>
        <p className='font-thin'>0</p>
        </div>
        <div  className='flex justify-between mt-2 font-bold'>
        <p>Date joined</p>
        <p className='font-thin'>2|10|2028</p>
        </div>
      </div>


      <div className='mt-3 font-bold'>
      <h1 className=' border-b-2 pb-2'>About</h1>
      <p className='font-thin pt-3'></p>
      </div>
      
      
      </section>
    </div>
  )
}

export default MyProflie
