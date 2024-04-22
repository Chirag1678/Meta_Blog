import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cards from './Cards';

function Bottom() {
    const navigate=useNavigate();
  return (
    <div className='w-full bg-[#f9f9fb] px-40 py-10'>
      <p className="text-[#c8c8c8]">
            <span onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </span>
            <span className="text-[#9b9b9b]"> - Reading lists
            </span>
        </p>
        <div className='w-full mt-5'>
           <Cards/> 
        </div>
    </div>
  )
}

export default Bottom
