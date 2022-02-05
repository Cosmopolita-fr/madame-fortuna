import React from 'react'
import { Box, color } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1 className="title" style={{ margin: '2rem' }}>
        Work in progress...
      </h1>
      <img
        className="card-img"
        src="https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg"
      ></img>
      <Link to="/">
        <Box
          as="button"
          p={3}
          color="white"
          fontFamily="Lexend Deca, sans-serif"
          fontWeight="bold"
          borderRadius="md"
          bgGradient="linear(to-r, purple.400, purple.900)"
          _hover={{
            bgGradient: 'linear(to-r, purple.900, yellow.100)'
          }}
        >
          Back to Home
        </Box>
      </Link>
      <p className="subtitle">
        Suggestions? Send us a message! <br />
        <a href="mailto:guilherme4garcia@gmail.com">aleixo.alinee@gmail.com</a>
        <br />
        <a href="mailto:guilherme4garcia@gmail.com">
          guilherme4garcia@gmail.com
        </a>
      </p>
    </div>
  )
}

export default About
