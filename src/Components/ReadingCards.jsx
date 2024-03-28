import React from 'react'

function ReadingCards(props) {
  return (
    <div className=''>
        <div className='rounded-lg overflow-hidden w-[13.5vw] aspect-[3/3.1]'><img src={props.src} alt='ui design'/></div>
        <p className='text-center font-semibold text-2xl py-4'>{props.name}</p>
    </div>
  )
}

export default ReadingCards
