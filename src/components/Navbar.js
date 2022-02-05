import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import {
  Menu,
  MenuButton,
  IconButton,
  Collapse,
  useDisclosure,
  Box,
  Button
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const location = useLocation()

  useEffect(() => {
    onClose()
    return () => {
      onClose()
    }
  }, [location])

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" className="logo" style={{}} />
            <h1
              className="logotitle"
              style={{
                position: 'absolute',
                marginLeft: '1.65rem'
              }}
            >
              Madame Fortuna
            </h1>
          </div>
        </Link>
        <Menu>
          <MenuButton
            ml="auto"
            as={IconButton}
            aria-label="Options"
            onClick={onToggle}
            icon={<HamburgerIcon />}
            variant="ghost"
            color="#fcf5d7ff"
            _hover={{ bg: '#39313eff' }}
            _active={{
              boxShadow: '0 0 1px 2px #fcf5d7ff, 0 1px 1px rgba(0, 0, 0, .15)'
            }}
            _focus={{
              boxShadow: '0 0 1px 2px #39313eff, 0 1px 1px rgba(0, 0, 0, .15)'
            }}
          />
        </Menu>
      </nav>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="4px"
          color="white"
          mt="0.5"
          bg="#000007ff"
          rounded="md"
          shadow="md"
          // boxShadow={'0 0 0.2em #39313eff'}
          display="flex"
          justifyContent="space-around"
        >
          <Link to="/search">
            <Button
              color="#fcf5d7ff"
              variant="ghost"
              _focus={{
                boxShadow: '0 0 1px 1px #fcf5d7ff, 0 1px 1px rgba(0, 0, 0, .15)'
              }}
            >
              Busca
            </Button>
          </Link>
          <Link to="/about">
            <Button
              color="#fcf5d7ff"
              variant="ghost"
              _focus={{
                boxShadow: '0 0 1px 1px #fcf5d7ff, 0 1px 1px rgba(0, 0, 0, .15)'
              }}
            >
              About
            </Button>
          </Link>
        </Box>
      </Collapse>
    </>
  )
}

export default Navbar
