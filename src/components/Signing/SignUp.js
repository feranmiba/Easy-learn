import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

function SignUp() {
  const api = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate()
  const [ isLoadingw, setisLoading ] = useState(true)
  const [ user, setUser ] = useState([]);
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [show, setShow] = useState(Boolean)
  const [errMesssage, setErrMessage] = useState("")

  const showErrorMessges = () => {
    setShow(!show)
    setTimeout(() => {
      setShow(false)
    }, 2000)
  } 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };
  const loading = () => {
    setisLoading(false)
    setTimeout(() => {
      setisLoading(true)
    }, 2000)
  }


  const handleSubmit = (e) => {
    try {
      loading()
      e.preventDefault()
      Axios.post(`${api}/signup`, profile).then(res => {
       console.log(res.data)
       if (res.data.success) {
        navigate("/profiles",{ state: {username: profile.username, email:profile.email, personID: res.data.id}}) 
       }
      
      }).catch(err => {
       setErrMessage(err.response.data.error)
       showErrorMessges()
      })
    } catch (error) {
      console.log(error)
    }
}


const signinWithGoogle = useGoogleLogin({
       onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
})

useEffect(
  () => {
      if (user) {
          Axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                  headers: {
                      Authorization: `Bearer ${user.access_token}`,
                      Accept: 'application/json'
                  }
              })
              .then((response) => {
               Axios.post(`${api}/google/signup`, response.data).then(res => {
                if (res.data.success) {
                 navigate("/profiles",{ state: {username: response.data.name, email:response.data.email}}) 
                }
               
               }).catch(err => {
                setErrMessage(err.response.data.error)
                showErrorMessges()
               })
              })
              .catch((err) => console.log(err));
      }
  },
  [ user ]
);

const logOut = () => {
  googleLogout();
  setProfile(null);
};


  return (
    <motion.div  initial={{  opacity: 0}}
    animate={{ opacity:1}}
    transition={{ duration: 1.55}}>

    <AnimatePresence mode='wait'  initial={false} >  
    {show && (
    <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} exit={{ opacity:0, x:-10}} transition={{duration: 0.6}}className='flex justify-end px-5 mt-2'>
    <p className='border px-10 py-5 bg-white rounded-lg'>{errMesssage}</p>
    </motion.div>)}
    </AnimatePresence>

    <section className=' flex justify-center items-center text-lg py-10'>
        <form  onSubmit={handleSubmit}   className='w-[80%] px-6 md:px-10 py-3 md:w-[40%] rounded-xl shadow-2xl text-[#FAF2F2] bg-[#2E303E]' >

          <div>
          <p className='font-bold'>Username</p>
          <input type='text' placeholder='Create your username' className='w-[90%] p-3 mt-3 bg-transparent outline-none' name="username" value={profile.username} onChange={handleChange} required/>
          </div>


          <div className='mt-5'>
          <p className='font-bold'>Email</p>
          <input type='email' placeholder='Input your E-mail' className='w-[90%] p-3 mt-3 bg-transparent outline-none' name="email" value={profile.email} onChange={handleChange} required/>
          </div>

          <div className='mt-5 mb-3'>
          <p className='font-bold'>Password</p>
          <input type='password' placeholder='Create your password' className='w-[90%] p-3 mt-3 bg-transparent outline-none' name="password" value={profile.password} onChange={handleChange} required/>
          </div>


          <div className='flex flex-col text-white items-center gap-3'>
          {isLoadingw ? (<button className=' bg-[#242832] rounded-xl p-3 w-[80%] font-bold' type='submit'>Sign up</button>    ): (
            <BeatLoader size={20} color='red'   />)} 
      <button onClick={() => signinWithGoogle()}   className='bg-[#0652DD] p-3 rounded-xl w-[90%] font-bold' >Sign in with Google 🚀 </button> 
          </div>
          <p className='text-center'>
          <h6>Already have an account ? 
          <Link to="/login"><b className=' font-extralight'>Log in</b></Link> 

          </h6>
          </p>

        </form>
       

        <div className='bg-white'>
        </div>
     </section>
    </motion.div>

  )
}

export default SignUp;
