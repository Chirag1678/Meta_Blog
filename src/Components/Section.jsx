import React from 'react'
import Cards from './Cards'

function Section(props) {
    const {section}=props;
    const {name,cards}=section;
  return (
    <div className='w-full font-open mt-20'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-4xl'>{name}</h1>
        <a href="./Section.jsx" className='text-[#9B9B9B]'>View all</a>
      </div>
      <Cards cards={cards}/>
    </div>
  )
}

export default Section
