import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutData from "./Components/Layout/Layout.jsx"
import Herosection from "./pages/herosection.jsx"
import Home from './pages/Home';
import Cards from "./pages/carousel.jsx"
import SlicderCard from "./pages/slider.jsx"


export default function App() {
  return (
    <>
    <LayoutData>
    <Herosection/>
    <Cards/>
    <SlicderCard/>
    </LayoutData>
    </>
  )
}
