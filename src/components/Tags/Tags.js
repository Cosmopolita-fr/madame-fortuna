import React, { useState, useEffect } from 'react'

import TagUp from './TagUp'
import TagDown from './TagDown'

/* icons */
import { BsFileArrowUp, BsFileArrowDown } from 'react-icons/bs'
import { GiPentacle, GiHandOfGod, GiCardPickup } from 'react-icons/gi'
import { RiSwordLine } from 'react-icons/ri'
import { FaGlassMartiniAlt } from 'react-icons/fa'
import { ImMagicWand } from 'react-icons/im'

/* Chakra */
import {
  Box,
  Tag,
  TagLabel,
  TagRightIcon,
  HStack,
  Wrap
} from '@chakra-ui/react'

function Tags({ type, suit, meaning_up, meaning_rev, cardOrientation, isRev }) {
  const [icon, setIcon] = useState('')
  const [typeIcon, setTypeIcon] = useState('')

  const tagUp = meaning_up.split(',')
  const tagDown = meaning_rev.split(',')

  const getIcon = () => {
    if (suit === 'maior') {
      setIcon(<GiHandOfGod size={'1.6em'} color="#fcf5d7ff" />)
    }
    if (suit === 'pentáculos') {
      setIcon(<GiPentacle size={'1.6em'} color="#fcf5d7ff" />)
    }
    if (suit === 'espadas') {
      setIcon(<RiSwordLine size={'1.4em'} color="#fcf5d7ff" />)
    }
    if (suit === 'copas') {
      setIcon(<FaGlassMartiniAlt size={'1.15em'} color="#fcf5d7ff" />)
    }
    if (suit === 'bastos') {
      setIcon(<ImMagicWand size={'1.6em'} color="#fcf5d7ff" />)
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
      >
        {icon}
        <Tag
          size={'md'}
          fontFamily="Lexend Deca, sans-serif"
          variant="subtle"
          colorScheme="purple"
          display={'flex'}
          flexDirection={'column'}
          padding={1}
        >
          <TagLabel>{type}</TagLabel>
          <TagLabel>{suit != 'maior' ? suit : ''}</TagLabel>
        </Tag>
      </HStack>
      <TagUp tagUp={tagUp} isRev={isRev} cardOrientation={cardOrientation} />
      <TagDown
        tagDown={tagDown}
        isRev={isRev}
        cardOrientation={cardOrientation}
      />
    </div>
  )
}

export default Tags
