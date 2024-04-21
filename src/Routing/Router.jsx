import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import TypesPage from '../pages/TypesPage'
import ReadingPage from '../pages/ReadingPage'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/type/:types' element={<TypesPage/>} />
      <Route path='/read/:type' element={<ReadingPage/>}></Route>
    </Routes>
  )
}

export default Router
