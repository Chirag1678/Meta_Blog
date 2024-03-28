import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Types from './Components/Types'
import Reading from './Components/Reading'
import Example from './Components/Example'

function App() {
  return (
    <div className='w-full h-full bg-[#F9F9FB]'>
      <Navbar/>
      <Landing/>
      <Types/>
      <Reading/>
      <Example/>
    </div>
  )
}

export default App
