import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import PopularPage from '../pages/PopularPage'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/popular' element={<PopularPage/>} />
    </Routes>
  )
}

export default Router
