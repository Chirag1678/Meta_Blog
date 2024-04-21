import React from 'react'
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

const Global = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/> 
      </>
  )
}

export default Global