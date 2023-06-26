import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineSearch } from "react-icons/hi";
import uk from '../../assets/image/uk.jpg'
import logo1 from '../../assets/image/logo1.png'
import './Navbar.css'



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div>
             <div className='bg-[#F6FAFF] md:pt-[72px] md:pl-[88px] md:pr-36 flex justify-between items-center w-full'>
               
               <img src={logo1} alt="" />
                   {/* <h1 className='text-3xl font-bold text-blue-400'>Masarat</h1> */}
                   <div className="md:flex hidden gap-8  text-gray-500">
                       <NavLink to="/">Home</NavLink>
                       <NavLink to='/about'>About Us</NavLink>
                       <NavLink to='/service'>Services</NavLink>
                       <NavLink to='/client'>Client</NavLink>
                       <NavLink to='/contact'>Contact Us</NavLink>
                   </div>

            
                   
               <div className="md:flex hidden items-center">
                      <div className='md:flex hidden'> <HiOutlineSearch className='text-2xl'/></div>
                       <div className='mr-4'>
                       <AiOutlineMenu className='text-[#9BEBA8] md:hidden block text-2xl '/>
                       <AiOutlineClose className='text-[#9BEBA8] md:hidden block text-2xl '/>
                       </div>
                       <div>
                           <div className="border-2 rounded-lg ml-2 hidden md:flex gap-2 px-2 py-2 h-[48px]">
                               <img className="h-8 w-8 rounded-full " src={uk} alt="" />
                               <p className="border-r-2 "></p>
                               <p>Eng (UK)</p>
                           </div>
                       </div>
                       <div>
                       <button className="ml-6 md:block hidden bg-gradient-to-r from-[#254b6e] to-[#152F47] delay-200 text-white font-semibold px-5 py-4 rounded-lg">
                                Book a Consultation
                            </button>
                          
                       </div>
                   </div>
               <div onClick={handleNav} className='md:hidden mr-6'>
                   {!nav ? <AiOutlineMenu size={20} className='w-5' /> : <AiOutlineClose />}

               </div>
           </div>
           <div >
            {/* mobile menu  */}
         <div className={!nav ? 'hidden' : 'absolute bg-[#F6FAFF] h-screen pt-8 w-full md:hidden px-8'}>
                <p className='border-b-2 mb-4 border-blue-400 w-full'>
                <NavLink to="/">Home</NavLink>
                </p>
                <p className='border-b-2 mb-4 border-blue-400 w-full'>
                <NavLink to='/about'>About Us</NavLink>
                </p>
                <p className='border-b-2 mb-4 border-blue-400 w-full'>

                <NavLink to='/service'>Services</NavLink>
                </p>
                <p className='border-b-2 mb-4 border-blue-400 w-full'>

                <NavLink to='/client'>Client</NavLink>
                </p>
                <p className='border-b-2 mb-4 border-blue-400 w-full'>

                <NavLink to='/contact'>Contact us</NavLink>
                </p>
                <div>
                           <button className="btn ml-2 md:block hidden">Book a ConsulTation</button>
                       </div>

                {/* <div className='flex flex-col pr-4'>
                    <button className='bg-transparent text-indigo-500 px-8 mb-4'>sign in</button>
                    <button className='px-8 py-3'>Log out</button>
                </div> */}
            </div>
         </div>
        </div>
    );
};

export default Navbar;