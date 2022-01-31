import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
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
              <Link to={`/card/${id}`}>
                <img className="card-img" src={image} alt="" />
              </Link>
            </Flex>
          </Flex>
        )
      })}
    </>
  )
}

export default CardList
