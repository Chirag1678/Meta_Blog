import React from 'react'
import logo from "../Assets/Images/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FaLinkedinIn, FaPinterestP, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa6";

function Navbar() {
    const Logo=[<FaLinkedinIn size="1.2em"/>,<FaPinterestP size="1.2em"/>,<FaInstagram size="1.2em"/>,<FaTwitter size="1.2em"/>,<FaFacebookF size="1.2em"/>]
  return (
    <div className='fixed w-full py-7 flex items-center justify-between px-40 text-white'>
        <div className='flex items-center gap-3'>
            {Logo.map((item,index)=><a href="./Navbar.jsx" className='h-10 w-10 rounded-full bg-white text-black flex justify-center items-center' key={index}>{item}</a>)}
        </div>
        <div className='logo -ml-16'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='accessories flex items-center gap-10'>
        <RxHamburgerMenu size="2em"/>
        <IoIosSearch size="2em"/>
        </div>
    </div>
  )
}

export default Navbar
