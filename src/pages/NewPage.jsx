import React from 'react'
import Upper from '../Components/ReadingLists/Upper'
import Bottom from '../Components/NewPage/Bottom';

function NewPage() {
    const data={
        title:"New",
        desc:`Our latest web design tips, tricks, insights, and resources coming hot off the presses daily.`
    }
  return (
    <div className='pt-24'>
      <Upper data={data}/>
      <Bottom/>
    </div>
  )
}

export default NewPage
