import React from 'react'
import { useNavigate } from 'react-router-dom';
function Card(props) {
    const navigate=useNavigate();
    const {data,redirect}=props;
  return (
    <div className='flex items-start w-[47%] gap-7' onClick={()=>navigate(`/read/${redirect}`)}>
      <div className='rounded-lg overflow-hidden w-[13.5vw] aspect-[3/3.8] flex justify-center items-center'>
        <img src={data.src} alt={`${data.title}`} className='w-full h-full object-cover'/>
      </div>
      <div className='w-[75%]'>
        <h1 className='text-[1.7rem] tracking-tighter font-medium capitalize'>{data.title}</h1>
        <p className='mt-5'>{data.desc}</p>
      </div>
    </div>
  )
}

export default Card
