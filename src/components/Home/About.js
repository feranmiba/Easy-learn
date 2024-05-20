import React from 'react'
import tutor from '../Image/tutor.png'
import collaborative from '../Image/collaborative.png'
import Remote from '../Image/remote.png'
import { useInView } from 'framer-motion'
import { useRef } from 'react'






function Sects({ children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true });


  return (
    <section ref={ref} className=' py-10 md:py-24 px-10 lg:px-20 font-thin'>
      <span
        style={{
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",   
          animationDelay: "3s",
          animationDuration: "2s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

function About() {
 



  return (
    <div>

    <section className='flex justify-center py-10'>
    <div>
    <h1 className='text-center text-2xl font-semibold'>Education is the most powerful weapon which you can use to change the world.</h1>
    <p className='text-center'>- Nelson Mandela</p>
    </div>
    </section>





    <section className='mt-16 md:mt-0 lg:p-14'>
        <div className='items-center text-center md:text-start  md:flex justify-between'>
        
            <div className='flex justify-center md:relative items-center md:jus w-[100%]'>
            <img src={tutor} alt='tutor' />
            </div>


            <Sects className=' py-24  px-20 font-thin '>
           
            <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl mb-5'>Tutor mentorship</h1>
            <p className='md:w-[90%]'>Unlock your full potential with Easy Learning's revolutionary tutor mentorship program! Our personalized approach to education goes beyond traditional teaching methods, offering students a dynamic learning experience tailored to their unique needs. With dedicated mentors by your side, you'll embark on a journey of growth, mastering subjects with ease and confidence. </p>
            </Sects>
        </div>


        <div className='flex flex-col-reverse items-center text-center md:text-start  md:flex md:flex-row justify-between'>

        <Sects className=' px-20 font-thin '>
        <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl mb-5 mt-5'>Collaborative Learning</h1>
        <p className='md:w-[90%]'>Experience the power of collaborative learning like never before with Easy Learning's innovative approach! Our platform fosters dynamic interactions among students through WhatsApp group chats and live group sessions, creating vibrant communities of learners. Harnessing the latest in AI technology, Easy Learning ensures that every participant receives personalized support and feedback, tailored to their individual learning pace and style. </p>
        </Sects> 
        
        <div className='flex justify-center md:relative items-center w-[100%]'>
        <img src={collaborative} alt='tutor' />
        </div>
    </div>



    <div className='items-center text-center md:text-start md:flex justify-between'>
        
    <div className='flex justify-center md:relative items-center w-[100%]'>
    <img src={Remote} alt='tutor' />
    </div>


    <Sects>
    <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl mb-5'>Learn Anywhere</h1>
    <p className='lg:w-[90%]'>Our platform empowers you to access high-quality educational resources from the comfort of your own space. Whether you're on the go or relaxing at home, Easy Learning makes learning convenient and flexible. With a vast library of courses covering a multitude of subjects, you can pursue your interests and goals at your own pace.</p>
    </Sects> 
</div>
        













    
    
    </section>
  
    </div>
  )
}

export default About
