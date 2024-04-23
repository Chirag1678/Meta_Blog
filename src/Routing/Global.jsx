import React from 'react'
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import { useLocation } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2.jsx';

const Global = ({children}) => {
  const location=useLocation();
  const renderNavbar = () => {
    const { pathname } = location;
    if (pathname === '/') {
      return <Navbar />;
    } else {
      return <Navbar2 />;
    }
  };
  return (
    <>
      {renderNavbar()}
      {children}
      <Footer/> 
    </>
  )
}

export default Global