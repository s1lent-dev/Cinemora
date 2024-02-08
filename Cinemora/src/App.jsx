import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Details from "./Pages/Details/Details"

const App = () => {

  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/Cinemora/" element={<Home />} />
        <Route path="/Cinemora/:type/:id" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
