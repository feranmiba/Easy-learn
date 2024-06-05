import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { googleLogout, useGoogleLogin, } from '@react-oauth/google';
import { BeatLoader } from 'react-spinners';


function Login() {
  const api = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate()
  const [ user, setUser ] = useState([]);
  const [isLoading, setIsLoading] = useState(true)



  const [loginProfile, setLoginProfile] = useState({
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

  const loading = () => {
    setIsLoading(false)
    setTimeout(() => {
      setIsLoading(true)
    }, 2000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };
  


  const handleSubmit =  (e) => {
    loading()
    e.preventDefault()
   Axios.post(`${api}/login`, loginProfile).then(res => {
    console.log(res.data)
    if (res.data.name) {
     navigate("/profiles", { state: {username: res.data.name, email:loginProfile.email}}) 
    }
   }).catch(err => {
    setErrMessage(err.response.data.error)
    showErrorMessges()
   }); 
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
                 Axios.post(`${api}google/login`, response.data).then(res => {
                  if (res.data.success) {
                   navigate("/profiles", { state: {username: response.data.name, email:response.data.email}})
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
  };

  

  return (
    <motion.div  initial={{  opacity: 0 }}
    animate={{  opacity:1}}
    transition={{  duration: 1.5}}>
    <AnimatePresence mode='wait'  initial={false} >
    {show && (
      <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} exit={{ opacity:0, x:-10}} transition={{duration: 0.6}}className='flex justify-end px-5 mt-2'>
      <p className='border px-10 py-5 bg-white rounded-lg'>{errMesssage}</p>
      </motion.div>)}
      </AnimatePresence>
    <section className=' flex justify-center items-center text-lg mt-10 py-5 '>
   
    <form  onSubmit={handleSubmit}  className='w-[80%] px-6 md:px-10 py-3 md:w-[40%] rounded-xl shadow-2xl text-[#FAF2F2] bg-[#2E303E]' >

    <div className='mt-5'>
    <p>Email</p>
    <input type='email' placeholder='E-mail' className='w-[90%] p-3 mt-3 outline-none bg-transparent' name="email" value={loginProfile.email} onChange={handleChange} required/>
    </div>

    <div className='mt-5 mb-3'>
    <p>Password</p>
    <input type='password' placeholder='Password' className='w-[90%] p-3 mt-3 outline-none bg-transparent' name="password" value={loginProfile.password} onChange={handleChange} required/>
    </div>


    <div className='flex flex-col text-white items-center gap-3'>
    {isLoading ? ( <button className=' bg-blue-950 rounded-xl p-3 w-[80%]' type='submit'>Login</button>
    ): ( <BeatLoader size={20} color='red' />)}
    <button className='bg-[#0652DD] p-3 rounded-xl w-[90%]'  onClick={() => signinWithGoogle()}>Login with Goggle</button>
    </div>
    <p className='text-center'>
    <h6>Don't have an account ? 
   <Link to="/signup"><b className=' font-extralight'>Sign up</b></Link> 
    </h6>
    </p>
   


    </form>
    </section>
    </motion.div>
  )
}

export default Login
