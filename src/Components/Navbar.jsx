import React, { useState } from 'react'
import logo from "../Assets/Images/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import Icons from './Icons';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate=useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [active,setActive]=useState("");
  const url={
        Popular:"/read/Popular",
        New:"/new",
        Reading:"/read",
        Topics:"/topics",
        Profile:"/profile"
    }
  return (
    <div className='fixed px-36 w-full pt-2'>
    <div className={`flex items-center justify-between w-full py-1 px-4 text-black ${location.pathname==="/"? "bg-[#f5f5f580]":"bg-white shadow-md shadow-gray-400"} rounded-3xl `}>
        <Icons background={`${location.pathname==="/"? 'white':''}`} text={`${location.pathname==="/"? 'black':'white'}`} size="1.2em" />
        <div className='logo -ml-16 cursor-pointer' onClick={()=>navigate("/")}>
            <img src={logo} alt='logo'/>
        </div>
        <div className='accessories flex items-center gap-10'>
        <RxHamburgerMenu size="2em" className='cursor-pointer' onClick={()=>setShowDropdown(!showDropdown)}/>
        <IoIosSearch size="2em" className='cursor-pointer'/>
        </div>
    </div>
    {showDropdown && <div className='absolute py-3 w-[15vw] bg-white shadow-md shadow-gray-400 mt-2 right-[14.5rem] rounded-xl px-3'>
      {["Popular","New","Reading list","Topics","Profile"].map((item,index)=>(
        <p key={index} className={`py-2 my-2 px-2 rounded-lg ${active===item? "bg-gray-200 cursor-pointer":""}`} onMouseEnter={()=>setActive(item)} onClick={()=>navigate(`${url[item.split(" ")[0]]}`)}>{item}</p>
      ))}
    </div>}
    </div>
  )
}

export default Navbar
