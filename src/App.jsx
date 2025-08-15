import { useState } from 'react'
import './App.css'
import Home from './Components/Othercomponents/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Routing_main from './Components/Routing_main'
import Footer from './Components/Othercomponents/Home/Footer'
import { useLocation } from 'react-router'

function App() {
  const location = useLocation();
  const hideLayout = ['/dashbaord'];
  const shouldHide = hideLayout.includes(location.pathname);
  return (
    <>
      {!shouldHide && <Navbar />}
      <Routing_main />
      {!shouldHide && <Footer />}
    </>
  )
}

export default App
