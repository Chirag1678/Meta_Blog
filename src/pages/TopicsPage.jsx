import React from 'react'
import Upper from '../Components/ReadingLists/Upper'
import { useNavigate } from 'react-router-dom'
import Cards from '../Components/TopicsPage/Cards';

function TopicsPage() {
    const data={
        title:"Topics",
        desc:"Find everything from design inspiration to best practices, freelancing tips to tools."
    }
    const navigate=useNavigate();
  return (
    <div className='w-full pt-24'>
      <Upper data={data}/>
      <div className='w-full px-40 bg-[#f9f9fb] py-10'>
      <p className="text-[#c8c8c8]">
            <span onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </span>
            <span className="text-[#9b9b9b]"> - Topics
            </span>
        </p>
        <div className='w-full mt-5'>
            <Cards/>
        </div>
      </div>
    </div>
  )
}

export default TopicsPage
