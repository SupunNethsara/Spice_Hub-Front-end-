import React from 'react'
import Home from './Othercomponents/Home/Home'


import { Routes, Route } from "react-router";


import Products from './Othercomponents/Products/Products';
import About from './Othercomponents/AboutUs/About';

export default function Routing_main() {
  return (
    <div className='m-0 p-0 overflow-hidden'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/products" element={<Products />} />




      </Routes>
    </div>
  )
}
