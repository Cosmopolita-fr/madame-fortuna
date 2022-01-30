import React, { useState, useEffect } from 'react'

/* icons */
import { BsFileArrowUp, BsFileArrowDown } from 'react-icons/bs'
import { GiPentacle, GiHandOfGod } from 'react-icons/gi'
import { RiSwordLine } from 'react-icons/ri'
import { FaGlassMartiniAlt } from 'react-icons/fa'
import { ImMagicWand } from 'react-icons/im'

/* Chakra */
import { Box, Tag, TagLabel, TagRightIcon, HStack } from '@chakra-ui/react'

function Tags({ suit, meaning_up, meaning_rev }) {
  const [icon, setIcon] = useState('')

  const tagUp = meaning_up.split(',')
  const tagDown = meaning_rev.split(',')

  const getIcon = () => {
    if (suit === 'major') {
      setIcon(<GiHandOfGod size={'1.6em'} color="#fcf5d7ff" />)
    }
    if (suit === 'pentacles') {
      setIcon(<GiPentacle />)
    }
    if (suit === 'swords') {
      setIcon(<RiSwordLine />)
    }
    if (suit === 'cups') {
      setIcon(<FaGlassMartiniAlt />)
    }
    if (suit === 'wands') {
      setIcon(<ImMagicWand />)
    }
  }

  useEffect(() => {
    getIcon()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <HStack
        display={'flex'}
        mt={'2rem'}
        mr={'auto'}
        mb={'0.25rem'}
        ml={'.75rem'}
        as="button"
        onClick={() => {
          console.log('Oi')
        }}
      >
        {icon}
        <Tag
          size={'md'}
          fontFamily="Lexend Deca, sans-serif"
          variant="subtle"
          colorScheme="purple"
        >
          <TagLabel>{suit}</TagLabel>
        </Tag>
      </HStack>
      <HStack ml={'.75rem'} mb={'0.25rem'}>
        <BsFileArrowUp size={25} color="#fcf5d7ff" />
        {tagUp.map((word, index) => {
          return (
            <Tag
              size={'md'}
              fontFamily="Lexend Deca, sans-serif"
              variant="subtle"
              colorScheme="purple"
              key={index}
            >
              <TagLabel as="button">{word}</TagLabel>
            </Tag>
          )
        })}
      </HStack>
      <HStack ml={'.75rem'}>
        <BsFileArrowDown size={25} color="#fcf5d7ff" />
        {tagDown.map((word, index) => {
          return (
            <Tag
              size={'md'}
              fontFamily="Lexend Deca, sans-serif"
              variant="subtle"
              colorScheme="purple"
              key={index}
            >
              <TagLabel as="button">{word}</TagLabel>
            </Tag>
          )
        })}
      </HStack>
    </div>
  )
}

export default Tags
