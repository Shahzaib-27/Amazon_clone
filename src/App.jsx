import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import IndexPage from "./pages/index.jsx"
import NotFoundPage from "./pages/NotfoundPage.jsx"

import TodaysDealSection from "./pages/TodaysDealSection.jsx"
import PrimeVideo from "./pages/PrimeVideo.jsx"
import RegistryPages from "./pages/RegistryPages.jsx"
import GiftCard from "./pages/GiftCard.jsx"
import CustomerPage from "./pages/CustomerPage.jsx"
import Sellpages from "./pages/Sellpages.jsx"

export default function App() {
return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/todaysdealsection" element={<TodaysDealSection />} />
        <Route path="/primevideo" element={<PrimeVideo />} />
        <Route path="/registry" element={<RegistryPages />} />
        <Route path="/giftcards" element={<GiftCard />} />
        <Route path="/customersrvice" element={<CustomerPage />} />
        <Route path="/sell" element={<Sellpages />} />

        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)
}

