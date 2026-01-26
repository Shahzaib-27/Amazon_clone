import React from 'react'
import LayoutData from "./Components/Layout/Layout.jsx"
import Herosection from "./pages/herosection.jsx"
import Home from './pages/Home';
import Cards from "./pages/carousel.jsx"


export default function App() {
  return (
    <>
    <LayoutData>
    <Herosection/>
    <Cards/>
    <Cards/>
    </LayoutData>
    </>
  )
}
