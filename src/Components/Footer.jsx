import React from 'react'
import logo from "../Assets/Images/Logo.svg";
import Icons from './Icons';

function Footer() {
  return (
    <div className='w-full bg-white px-40 py-10 flex justify-between items-center'>
      <div className='logo'>
        <img src={logo} alt="logo" className=' fill-black'/>
      </div>
      <div>
        <Icons background="black" text="white" size="1.2em" pad="10"/>
      </div>
      <div className='font-open text-[#9b9b9b]'>
        <p>All Rights Reserved 2018 3layers</p>
      </div>
    </div>
  )
}

export default Footer
