import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './themes/index'

// import pages
import Home from './pages/Home'
import Search from './pages/Search'
import Error from './pages/Error'
import About from './pages/About'
// import components
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<Card />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
