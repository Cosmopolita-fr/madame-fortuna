import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { extendTheme, ChakraProvider } from '@chakra-ui/react'

// import pages
import Home from './pages/Home'
// import components
import Navbar from './components/Navbar'
// import galaxy from './assets/galaxy-bg.jpg'

// const customTheme = extendTheme({
//   styles: {
//     global: {
//       body: {
//         backgroundImage: galaxy,
//         bgSize: 'contain'
//       }
//     }
//   }
// })

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
