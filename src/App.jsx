import { useState } from 'react'
import './App.css'
import Home from './Components/Othercomponents/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Routing_main from './Components/Routing_main'
import Footer from './Components/Othercomponents/Home/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Routing_main />
      <Footer />
    </>
  )
}

export default App
