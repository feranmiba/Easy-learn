import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Signing/Login';
import SignUp from './components/Signing/SignUp';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer';
import Profiles from './components/Profile/Profiles';
import Class from './components/Learning/Class';
import MobileNav from './components/Navbar/MobileNav';
import { BeatLoader } from 'react-spinners';
import { useEffect, useState } from 'react';

  


function App() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])
  return (
     <div>
     {isLoading ?(
    <div className='flex flex-col gap-5 items-center justify-center mt-[0%] bg-[#0d2521] p-56'>
    <h1 className='text-xl md:text-2xl font-extrabold text-[#FAF2F2]'>Easy Learning.........</h1>
    <BeatLoader size={30} color='red' loading={isLoading} />
    </div>  
     ) : ( <div>


   <Nav />
    <MobileNav />

    <Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/signup' element={  <SignUp /> } />
    <Route path='/login' element={    <Login/> } />
    <Route path='/pricing' element={    <Pricing/> } />
    <Route path='/profiles' element={  <Profiles /> } />
    <Route path='/class' element={  <Class /> } />
    </Routes>
    <Footer />
    </div>)}
    </div>
  );
}

export default App;
