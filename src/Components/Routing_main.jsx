import React from "react";
import Home from "./Othercomponents/Home/Home";
import { Routes, Route } from "react-router";
import Products from "./Othercomponents/Products/Products";
import About from "./Othercomponents/AboutUs/About";
import Mission from "./Othercomponents/AboutUs/Navigate_components/Mission";
import History from "./Othercomponents/AboutUs/Navigate_components/History";
import C_message from "./Othercomponents/AboutUs/Navigate_components/C_message";
import Directorboard from "./Othercomponents/AboutUs/Navigate_components/Directorboard";
import Distribution from "./Othercomponents/AboutUs/Navigate_components/Distribution";
import Q_Assurance from "./Othercomponents/AboutUs/Navigate_components/Q_Assurance";

export default function Routing_main() {
  return (
    <div className="m-0 p-0 overflow-hidden">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<About />}>
          <Route index element={<Mission />} />
          <Route path="history" element={<History />} /> 
          <Route path="cmessage" element={<C_message />} /> 
          <Route path="directorboard" element={<Directorboard />} /> 
          <Route path="distribution" element={<Distribution />} /> 
          <Route path="qa" element={<Q_Assurance />} /> 
        </Route>
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}
