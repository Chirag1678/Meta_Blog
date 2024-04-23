import React, { useEffect, useMemo, useState } from 'react'
import logo from "../Assets/Images/Logo.svg";
import { IoIosSearch, IoMdHome } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar2() {
    // const url={
    //     Popular:"/read/Popular",
    //     New:"/",
    //     Reading:"/read",
    //     Topics:"/topics",
    //     Subscribe:"/"
    // }
    const url = useMemo(() => ({
        Popular: "/read/Popular",
        New: "/new",
        Reading: "/read",
        Topics: "/topics",
        Subscribe: "/"
    }), []);
    const navigate=useNavigate();
    const location = useLocation();

    const [activeTab, setActiveTab] = useState("");
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }
    useEffect(()=>{
        if(Object.values(url).includes(location.pathname)){
            const tab=getKeyByValue(url,location.pathname);
            if (tab) {
                setActiveTab(tab);
            }
        }
    },[location.pathname,url]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(url[tab]);
    };
  return (
    <div className='fixed px-36 w-full font-open pt-1'>
      <div className='py-6 bg-white flex items-center justify-between px-4 rounded-3xl shadow-md shadow-gray-300'>
        <div className='flex items-center gap-x-10'>
        <div onClick={()=>navigate("/")} className='cursor-pointer'>
            <img src={logo} alt="logo" />
        </div>
        <div className='flex items-center gap-x-4 font-semibold'>
            {["Popular","New","Reading list","Topics","Subscribe"].map((item)=>(
                <p className={`cursor-pointer px-2 py-1 ${activeTab === item.split(" ")[0] ? 'bg-[#ff5480] text-white rounded-md' : ''}`} onClick={()=>handleTabClick(item.split(" ")[0])} key={item}>{item}</p>
            ))}
        </div>
        </div>
        <div className='flex items-center gap-x-8'>
        <IoIosSearch size="2em" className='cursor-pointer'/>
        <IoMdHome size="2em" className='cursor-pointer' onClick={()=>navigate("/")}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar2
