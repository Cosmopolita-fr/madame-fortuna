import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../logo.svg'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Collapse,
  useDisclosure,
  Box,
  Button,
  Flex
} from '@chakra-ui/react'

import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon
} from '@chakra-ui/icons'

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
          <img src="" alt="logo" className="logo" />
        </Link>
        <Menu>
          <MenuButton
            ml="auto"
            as={IconButton}
            aria-label="Options"
            onClick={onToggle}
            icon={<HamburgerIcon />}
            variant="outline"
            color="blueviolet"
            _hover={{ bg: '#39313eff' }}
            _active={{
              boxShadow: '0 0 1px 2px blueviolet, 0 1px 1px rgba(0, 0, 0, .15)'
            }}
            _focus={{
              boxShadow: '0 0 1px 2px blueviolet, 0 1px 1px rgba(0, 0, 0, .15)'
            }}
          />
        </Menu>
      </nav>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="5px"
          color="white"
          mt="0.5"
          ml="0.5rem"
          mr="0.5rem"
          bg="#000007ff"
          rounded="md"
          shadow="md"
          boxShadow={'0 0 0.2em blueviolet'}
          display="flex"
          justifyContent="center"
        >
          <Link to="/search">
            <Button
              colorScheme="purple"
              variant="ghost"
              _focus={{
                boxShadow:
                  '0 0 1px 1px blueviolet, 0 1px 1px rgba(0, 0, 0, .15)'
              }}
            >
              Search
            </Button>
          </Link>
          <Button
            colorScheme="purple"
            variant="ghost"
            _focus={{
              boxShadow: '0 0 1px 1px blueviolet, 0 1px 1px rgba(0, 0, 0, .15)'
            }}
          >
            Cards
          </Button>
          <Button
            colorScheme="purple"
            variant="ghost"
            _focus={{
              boxShadow: '0 0 1px 1px blueviolet, 0 1px 1px rgba(0, 0, 0, .15)'
            }}
          >
            About
          </Button>
          <Button
            colorScheme="purple"
            variant="ghost"
            _focus={{
              boxShadow: '0 0 1px 1px blueviolet, 0 1px 1px rgba(0, 0, 0, .15)'
            }}
          >
            Suits
          </Button>
        </Box>
      </Collapse>
    </>
  )
}

export default Navbar
