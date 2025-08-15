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
import ContactUS from "./Othercomponents/ContactUs/ContactUS";
import Q_main from "./Othercomponents/Quality/Q_main";
import Q_Controlling from "./Othercomponents/Quality/NavigateComponents/Q_Controlling";
import Q_Assurance from "./Othercomponents/Quality/NavigateComponents/Q_Assurance";
import Dashbaord from "./Registered Users Process/Dashbaord";
import AllItems from "./Registered Users Process/Routing Components/All";


export default function Routing_main() {
  return (
    <div className="m-0 p-0 overflow-hidden">
      <Routes>
        <Route path="/dashbaord" element={<Dashbaord />} >
         <Route index element={<AllItems/>} />
         <Route path="all" element={<AllItems />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<About />}>
          <Route index element={<Mission />} />
          <Route path="history" element={<History />} />
          <Route path="cmessage" element={<C_message />} />
          <Route path="directorboard" element={<Directorboard />} />
          <Route path="distribution" element={<Distribution />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/Quality" element={<Q_main />} >
          <Route index element={< Q_Controlling />} />
          <Route path="quality_A" element={<Q_Assurance />} />
        </Route>
        <Route path='/connect' element={<ContactUS />} />
      </Routes>
    </div>
  );
}
