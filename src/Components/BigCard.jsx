import React from 'react'
import popular from '../Assets/Images/popular.png';

function BigCard(props) {
  return (
    <div className='w-1/2 py-12 px-10 rounded-xl bg-[#1B0042] text-white h-[45vh]' style={{backgroundImage:`url(${popular})`}}>
        <h6 className='uppercase'>{props.title}</h6>
        <h1 className='capitalize font-semibold text-[1.7rem] leading-tight pt-3'>{props.heading}</h1>
        <p className='pt-7'>{props.desc}</p>
        </div>
  )
}

export default BigCard
