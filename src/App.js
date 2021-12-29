import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import pages
import Home from './pages/Home'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
