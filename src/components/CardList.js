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
            justifyContent={'center'}
          >
            <Flex>
              <img className="card-img" src={image} alt="" />
            </Flex>
          </Flex>
        )
      })}
    </>
  )
}

export default CardList
