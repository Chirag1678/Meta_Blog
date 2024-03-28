import React from 'react'
import { FaLinkedinIn, FaPinterestP, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa6";

function Icons(props) {
    const Logo=[<FaLinkedinIn size={props.size} color={props.text}/>,<FaPinterestP size={props.size} color={props.text}/>,<FaInstagram size={props.size} color={props.text}/>,<FaTwitter size={props.size} color={props.text}/>,<FaFacebookF size={props.size} color={props.text}/>]
  return (
    <div className='flex items-center gap-3'>
            {Logo.map((item,index)=><a href="./Navbar.jsx" className={`h-${props.pad} w-${props.pad} rounded-full ${props.background==="white"? "bg-white":"bg-[#9b9b9b]"} text-black flex justify-center items-center`} key={index}>{item}</a>)}
        </div>
  )
}

export default Icons
