import React from 'react'

function Card(props) {
    const {data}=props;
  return (
    <div className='w-[49%] h-[30vh] bg-white px-8 py-10 pr-20 rounded-xl shadow-md shadow-gray-400 flex-shrink-0'>
      <div className='flex gap-x-8 pb-7'>
        <img src={data.src} alt={`${data.title}`}/>
        <h1 className='font-semibold text-lg capitalize'>{data.title}</h1>
      </div>
      <p className=''>{data.desc}</p>
    </div>
  )
}

export default Card
