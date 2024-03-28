import React from 'react'

function SmallCard(props) {
  return (
    <div className="w-[48.5%] h-[47.5%] bg-white rounded-xl px-5 py-10 shadow-md shadow-gray-300">
                <h6 className='uppercase text-[#9b9b9b] text-sm pb-3'>{props.title}</h6>
                <h1 className='capitalize text-lg font-semibold leading-tight'>{props.heading}</h1>
            </div>
  )
}

export default SmallCard
