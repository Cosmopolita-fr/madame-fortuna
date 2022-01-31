import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
/* Chakra */
import { Box, Tag, TagLabel, TagRightIcon, HStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

function NewCard() {
  const { card, icon, isLoading, setLoading } = useGlobalContext()
  const { name, image, desc, suit, meaning_up, id } = card

  return (
    <div>
      <h1 className="title">{name}</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img className="card-img" src={image} alt="" />
        <HStack
          spacing={10}
          mt={'2rem'}
          mr={'auto'}
          mb={'0.2rem'}
          ml={'0.5rem'}
        >
          <Tag
            size={'md'}
            fontFamily="Lexend Deca, sans-serif"
            variant="subtle"
            colorScheme="purple"
          >
            <TagLabel>{suit}</TagLabel>
            <TagRightIcon boxSize={5}>{icon}</TagRightIcon>
          </Tag>
        </HStack>
      </div>
      <p className="subtitle">{desc}</p>
    </div>
  )
}

export default NewCard
