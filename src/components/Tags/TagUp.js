import React from 'react'

/* icons */
import { BsFileArrowUp } from 'react-icons/bs'

/* Chakra */
import { Tag, TagLabel, Wrap } from '@chakra-ui/react'

function TagUp({ tagUp, cardOrientation, isDesktop }) {
  return (
    <Wrap ml={'.75rem'} mb={'0.25rem'} mr={'.75rem'} spacing={1}>
      {cardOrientation ? '' : <BsFileArrowUp size={25} color="#fcf5d7ff" />}
      {tagUp.map((word, index) => {
        if (!cardOrientation) {
          return (
            <Tag
              size={isDesktop ? 'lg' : 'md'}
              fontFamily="Lexend Deca, sans-serif"
              variant="subtle"
              colorScheme="purple"
              key={index}
            >
              <TagLabel>{word}</TagLabel>
            </Tag>
          )
        }
      })}
    </Wrap>
  )
}

export default TagUp
