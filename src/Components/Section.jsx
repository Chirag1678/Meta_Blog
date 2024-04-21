import React from 'react'
import Cards from './Cards'
import { useNavigate } from 'react-router-dom';

function Section(props) {
  const navigate=useNavigate();
    const {section}=props;
    const {name,cards}=section;
  return (
    <div className='w-full font-open mt-20'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-4xl capitalize'>{name}</h1>
        <button onClick={()=>navigate(`/${name}`)} className='text-[#9B9B9B]'>View all</button>
      </div>
      <Cards cards={cards}/>
    </div>
  )
}

export default Section
