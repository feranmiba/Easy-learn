import React, { useState } from 'react'
import Content from './Content'
import SchemeOfWork from './SchemeOfWork'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function Class() {
  const api = process.env.REACT_APP_BACKEND

  const [data, setData] = useState([])
  const Location = useLocation()

  const courseName = Location.state.courseName
  const content = Location.state.content
  const code = Location.state.code

  console.log(content)


console.log(data)

  const startLesson = (topic) => {
    console.log(topic)
    try {
      axios.get(`${api}/coursetopic?topic=${topic}`).then(res => {
        setData(res.data)
      })    
    } catch (error) {
      console.log(error)
    }
  }


 


  return (
    <motion.div  initial={{  opacity: 0}}
    animate={{ opacity:1}}
    transition={{ duration: 1.55}}>
    <section className='flex flex-wrap sm:flex-nowrap justify-between p-10'>
    <div className='w-full sm:w-[30%] sm:block text-[#FAF2F2] mb-10 sm:mb-0'>
      <section className='p-5 rounded-xl bg-[#2E303E] shadow-xl'>
      
      
      <p className='mt-3 cursor-pointer hover:text-neutral-300 font-semibold uppercase'>{courseName} {code}</p>
      

   {content.map((inIt) => ( <div>

    <p className='mt-3 cursor-pointer hover:text-neutral-300' onClick={() => startLesson(inIt) }>{inIt}</p>

   
    
    </div>))}
      
      </section>
    </div>




  
    <div className=' sm:w-[65%] text-[#FAF2F2]'>
    {data.map((lesson) => (  <section className='p-5 rounded-xl bg-[#2E303E] shadow-xl'>
      

      <h1 className='border-b-2 pb-4'>Topic: <span className='text-2xl font-bold'>{lesson.courseTopic}</span></h1>

      <p className='mt-2'>Get started by watching a video on {lesson.courseTopic}</p>
      <iframe className='w-full h-[300px] mt-5' src={lesson.courseVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


      <div>
      <p className='border-b-2 pb-5 font-bold text-2xl mt-8'>Note</p>

      <p className='mt-3'>{lesson.courseContent}</p>
      </div>


    
      {lesson.types && lesson.types.length > 0 && (
        <ol type='1' >
          {lesson.types.map((type, index) => (
            <li key={index} className='font-semibold text-base mt-2'>{type}</li>
          ))}
        </ol>
      )}
      

      <div className='flex justify-end mt-4'>
      <button className='shadow-xl px-5 py-1 rounded-lg bg-[#20212b]'>Next</button>
      </div>
      
      </section>))}
    </div>

    </section>
    </motion.div>
  )
}

export default Class
