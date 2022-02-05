import React, { useEffect } from 'react'
import { Box, Flex, useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { ImMagicWand } from 'react-icons/im'
function CardList({ cards }) {
  const toast = useToast()
  useEffect(() => {
    toast({
      title: 'Clique na carta para mais informações',
      status: 'info',
      duration: 2500,
      isClosable: true,
      position: 'bottom'
    })
  }, [])

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
