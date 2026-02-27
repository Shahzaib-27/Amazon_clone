import React from 'react'

import LayoutData from "../Components/Layout/Layout.jsx"
import Herosection from "../Components/herosection.jsx"
import Cards from "../Components/carousel.jsx"
import SlicderCard from "../Components/slider.jsx"
import Homecard from "../Components/HomeCards.jsx"

import AllPgaesSection from './AllPgaesSection.jsx';


export default function index() {
  return (
     <>
        <LayoutData>
        <Herosection/>
        <Homecard/>
        <Cards/>
        <SlicderCard/>
        </LayoutData>
    </>
  )
}
