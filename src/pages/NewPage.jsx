import React from 'react'
import Upper from '../Components/ReadingLists/Upper'

function NewPage() {
    const data={
        title:"New",
        desc:`Our latest web design tips, tricks, insights, and resources coming hot off the presses daily.`
    }
  return (
    <div className='pt-24'>
      <Upper data={data}/>
    </div>
  )
}

export default NewPage
