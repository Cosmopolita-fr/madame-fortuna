import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="" alt="logo" className="logo" />
      </Link>
    </nav>
  )
}

export default Navbar
