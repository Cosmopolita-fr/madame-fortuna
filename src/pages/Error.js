import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 className="title" style={{ margin: '2rem' }}>
        Oops! it's a dead end...
      </h1>
      <img
        className="card-img"
        src="https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg"
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
    </section>
  )
}

export default Error
