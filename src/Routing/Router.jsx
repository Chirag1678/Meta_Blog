import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import TypesPage from '../pages/TypesPage'
import ReadingPage from '../pages/ReadingPage'
import ReadingLists from '../pages/ReadingLists'
import TopicsPage from '../pages/TopicsPage'
import NewPage from '../pages/NewPage'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/type/:types' element={<TypesPage/>} />
      <Route path='/read/:type' element={<ReadingPage/>}></Route>
      <Route path='/read' element={<ReadingLists/>}></Route>
      <Route path='/topics' element={<TopicsPage/>}></Route>
      <Route path='/new' element={<NewPage/>}></Route>
    </Routes>
  )
}

export default Router
