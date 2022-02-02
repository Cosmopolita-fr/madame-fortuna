import React from 'react'
import { useGlobalContext } from '../../context'
/* icons */
import { BsFileArrowDown } from 'react-icons/bs'

/* Chakra */
import { Tag, TagLabel, Wrap } from '@chakra-ui/react'

function TagDown({ tagDown, isRev, cardOrientation }) {
  const { isSearchPage } = useGlobalContext()
  return (
    <Wrap ml={'.75rem'} spacing={1} mr={'.75rem'}>
      {(isRev && !cardOrientation) || !isSearchPage ? (
        ''
      ) : (
        <BsFileArrowDown size={25} color="#fcf5d7ff" />
      )}
      {isRev && cardOrientation && !isSearchPage ? (
        <BsFileArrowDown size={25} color="#fcf5d7ff" />
      ) : (
        ''
      )}
      {tagDown.map((word, index) => {
        if (!isRev && !isSearchPage) {
          return
        } else if (isSearchPage) {
          return (
            <Tag
              size={'md'}
              fontFamily="Lexend Deca, sans-serif"
              variant="subtle"
              colorScheme="purple"
              key={index}
            >
              <TagLabel>{word}</TagLabel>
            </Tag>
          )
        } else if (isRev && !cardOrientation) {
          return
        } else {
          return (
            <Tag
              size={'md'}
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

export default TagDown
