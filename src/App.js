import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './themes/index'

// import pages
import Home from './pages/Home'
import Search from './pages/Search'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
