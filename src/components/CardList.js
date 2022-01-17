import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
function CardList({ cards }) {
  return (
    <>
      {cards.map(card => {
        const { id, image } = card
        return (
          <Flex
            key={id}
            display={'flex'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={'center'}
          >
            <Box>
              <img className="card-img" src={image} alt="" />
            </Box>
          </Flex>
        )
      })}
    </>
  )
}

export default CardList
