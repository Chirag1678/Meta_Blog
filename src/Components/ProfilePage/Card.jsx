import React from 'react'

function Card(props) {
    const {data}=props;
  return (
    <div className='mb-5'>
        <div className='img w-full h-[60vh]'>
            <img src={data.src} alt="" className='w-full h-full object-cover object-center rounded-xl'/>
        </div>
        <div className='text w-[80%] py-5'>
        <h6 className='uppercase'>
                    <span className='text-[#9b9b9b] pr-3'>by</span>
                    {data.name}
                    <span className='text-[#9b9b9b] px-3'>in</span>
                    {data.type}
                </h6>
                <h1 className='capitalize font-semibold text-[28px] leading-tight py-5'>{data.heading}</h1>
        </div>
    </div>
  )
}

export default Card
