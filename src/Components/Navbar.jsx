import React from 'react'
import logo from "../Assets/Images/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import Icons from './Icons';

function Navbar() {
    
  return (
    <div className='fixed px-36 w-full pt-2'>
    <div className=' flex items-center justify-between w-full py-1 px-4 text-black bg-[#f5f5f580] rounded-3xl '>
        <Icons background="white" text="black" size="1.2em" />
        <div className='logo -ml-16'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='accessories flex items-center gap-10'>
        <RxHamburgerMenu size="2em"/>
        <IoIosSearch size="2em"/>
        </div>
    </div>
    </div>
  )
}

export default Navbar
