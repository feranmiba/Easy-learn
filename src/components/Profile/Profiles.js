import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { FaBook } from 'react-icons/fa6'
import { FadeLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'


function Profiles() {
  const api = process.env.REACT_APP_BACKEND

  const navigate = useNavigate()
  const Location = useLocation()
  const email = Location.state.email

  const [showModal, setShowModal] = useState(Boolean)
  const [showMode, setShowMode] = useState(Boolean)
  const [show, setShow] = useState(Boolean)
  const [registeredCourses, setRegisteredCourses] = useState([])
  const [ isLoadingw, setisLoading ] = useState(false)
  const [ isLoading, setisLoadings ] = useState(false)
  const [ message, setMessage ] = useState("")

 const searchResult = [
    {
      id: 1, 
      course: "English",
      courseCode: "ENG 101"
    },
    {
      id: 2, 
      course: "English",
      courseCode: "ENG 102"
    },
    {
      id: 3, 
      course: "Mathematics",
      courseCode: "MAT 101"
    }, 
    {
      id: 4, 
      course: "Mathematics",
      courseCode: "MAT 102"
    }
  ]


  //FUNCTIONS
  const loading = () => {
    setisLoading(true)
    setTimeout(() => {
      setisLoading(false)
    }, 2500)
  }
  const showErrorMessges = () => {
    setShow(!show)
    setTimeout(() => {
      setShow(false)
    }, 2000)
  } 
  const load = () => {
    setisLoadings(true)
    setTimeout(() => {
      setisLoadings(false)
    }, 2500)
  }
  const showCourses = () => {
    setShowModal(!showModal)
    setShowMode(false)
  }
  const startCourse = (courses) => {
    const code = courses.course_code
    try {
      load()
      axios.get(`${api}/courses/${code}`).then(res => {
        if (res.data) {
          navigate("/class", {state: { courseName: res.data.courseName, content: res.data.courseContent}})
        }
      })
    } catch (error) {
      console.log(error)
    }
          
  }

  const enrolledCourses = (courses) => {
    try {
      loading()
      console.log( courses.course, courses.courseCode)
      axios.post(`${api}/id`, {
        email: email,
        course: courses.course,
        courseCode: courses.courseCode
      }).then(res => {
        if (res.data.success) {
          setMessage(res.data.success)
          showErrorMessges()
        }
      
      }).catch(err => {
        console.log(err)
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const showMyCourses = () => {
      try {
        setShowMode(!showMode)
        setShowModal(false)
            axios.post(`${api}/courses-registered`, {
              email: email,} ).then(res => {
                console.log(res.data)
                setRegisteredCourses(res.data)
              })
      } catch (error) {
        console.log(error)
      }
     
    }

    showMyCourses()
  }, [])
  const showRegisteredCourses = () => {
    try {
      setShowMode(!showMode)
      setShowModal(false)
          axios.post(`${api}/courses-registered`, {
            email: email,} ).then(res => {
              console.log(res.data)
              setRegisteredCourses(res.data)
            })
    } catch (error) {
      console.log(error)
    } 
  }

 
  return (
   <motion.div initial={{  opacity: 0}} animate={{ opacity:1}} transition={{ duration: 1.55}} > 
    <section className='md:flex justify-between p-10 '> 
      <div className='w-[100%] md:w-[30%] text-[#FAF2F2]'>
          <section className='p-8 rounded-xl bg-[#2E303E] shadow-xl'>
          <div className='text-center'>
          <h1><b> Name</b>: {Location.state.username}</h1>
          <p className='mt-2'><b>Email</b>: {Location.state.email}</p>
          </div>
          <div className='mt-5'>
            <div  className='flex justify-between font-bold'>
            <p>Courses </p>
            <p className='font-thin'>{registeredCourses.length}</p>
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

      <div className='mt-8 md:mt-0 w-[100%] md:w-[65%] text-[#FAF2F2]'>
        <section className='p-5 bg-[#2E303E] shadow-xl rounded-lg'>
         <p className='border w-[100%] flex gap-2 p-2 rounded-lg'><FaBook className='mt-1'/> <input type='text' placeholder='Search for a course' className='w-[70%] outline-none bg-transparent px-2'/></p>

          <div className='mt-5'>
            <div className='flex gap-5'>
            <button onClick={showRegisteredCourses}>Registered Courses <span className='px-3 py-1 bg-[#72421f] rounded-lg shadow-xl'>{registeredCourses.length}</span></button>
            <p>|</p>
            <button onClick={showCourses}>Avaliable Courses</button>
            </div>

            {showMode && ( <section className='flex flex-wrap gap-5 mt-7 border-t-2 pt-5'>
              {registeredCourses.map((courses) => { 
                return(
                  <div className='border pb-2 rounded-xl mt-5' key={courses.id}>
                    <div className='border px-14 py-5 rounded-t-xl bg-[#3d3d51]' >
                    <h1>{courses.course_code}</h1>
                    </div>
                    <div className='px-3 py-2'>
                    <p>{courses.course}</p>

                    <button className='mt-3 border py-1 px-3 rounded-xl' onClick={() => startCourse(courses)}>  Start course</button>
                    </div>
                
                  </div>)})}
                  </section>)}
            {isLoading ? ( <div className='ml-[25%] mr-[25%] flex absolute -mt-[20%] rounded-xl'><p className='h-[0vh]  '><FadeLoader height={10} width={10} color='#fff' /> Starting.....</p></div>) : ( <p></p>)  }

        {showModal &&( <section className='flex flex-wrap gap-5 mt-7 border-t-2 pt-5'>
          {searchResult.map((courses) => { 
            return(
              <div className='border pb-2 rounded-xl mt-5'  key={courses.id}>
                <div className='border px-14 py-5 rounded-t-xl bg-[#3d3d51]'>
                <h1>{courses.courseCode}</h1>
                </div>
                <div className='px-3 py-2'>
                <p>{courses.course}</p>

                <button className='mt-3 border py-1 px-3 rounded-xl' onClick={() => enrolledCourses(courses)}>Enroll course</button>
                </div>

              </div>)})}
              </section>)}
            {isLoadingw ? ( <div className='ml-[25%] mr-[25%] flex absolute -mt-[25%] rounded-xl'><p className='h-[0vh]  '><FadeLoader height={10} width={10} color='#fff' /> Registering.....</p></div>) : ( <p></p>)  }
          <AnimatePresence mode='wait'  initial={false} >
          
          {show && (
          <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{ opacity:0, y:-10}} transition={{duration: 0.6}}className='ml-[25%] mr-[25%] flex absolute -mt-[18%]'>
          <p className=' px-3 py-2 bg-[#0d2521] rounded-lg'>{message}</p>
          </motion.div>)}
          </AnimatePresence>
          </div>
        </section>
      </div>
    </section>
   </motion.div>
  )
}

export default Profiles
