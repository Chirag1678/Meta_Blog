import React from 'react'
import Landing from '../Components/Landing'
import Types from '../Components/Types'
import Reading from '../Components/Reading'
import Examples from '../Components/Examples'

const LandingPage = () => {
  return (
    <div className='w-full h-full bg-[#F9F9FB]'>
      <Landing/>
      <Types/>
      <Reading/>
      <Examples/>
    </div>
  )
}

export default LandingPage
