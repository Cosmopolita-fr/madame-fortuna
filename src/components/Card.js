import React, { useState, useEffect } from 'react'
import Loading from './Loading'

// icons
import { GiPentacle, GiHandOfGod } from 'react-icons/gi'
import { RiSwordLine } from 'react-icons/ri'
import { FaGlassMartiniAlt } from 'react-icons/fa'
import { ImMagicWand } from 'react-icons/im'

// data
import cardback from '../assets/cardback.png'
import {
  cards_major,
  cards_wands,
  cards_cups,
  cards_swords,
  cards_pents
} from '../data'

//chakra
import {
  Box,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  HStack,
  Spinner
} from '@chakra-ui/react'

const Card = () => {
  const [card, setCard] = useState([])
  const [image, setImage] = useState(cardback)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [suit, setSuit] = useState('Major')
  const [icon, setIcon] = useState('')
  const [meaningUp, setMeaningUp] = useState([])
  const [isRev, setIsRev] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const rotateCard = () => {
    const random_boolean = Math.random() < 0.5
    setIsRev(random_boolean)
  }

  const handleClick = () => {
    setImage(cardback)
  }

  const fetchInfo = async () => {
    setLoading(true)
    rotateCard()
    const response = await fetch(
      'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1'
    )
    const data = await response.json()
    setName(data.cards[0].name)
    setDesc(data.cards[0].desc)
    setSuit(data.cards[0].suit)
    setMeaningUp(data.cards[0].meaning_up.split(/[;,]+/))

    if (isRev) setMeaningUp(data.cards[0].meaning_rev.split(/[;,]+/))
    if (data.cards[0].type === 'major') {
      const major = cards_major.filter(
        element => element.id === data.cards[0].value_int
      )
      setImage(major[0].image)
      setSuit('major')
      setIcon(<GiHandOfGod size={30} />)
    }

    if (data.cards[0].suit === 'pentacles') {
      const pentacles = cards_pents.filter(
        element => element.id === data.cards[0].value_int
      )
      setImage(pentacles[0].image)
      setIcon(<GiPentacle size={25} />)
    }

    if (data.cards[0].suit === 'cups') {
      const cups = cards_cups.filter(
        element => element.id === data.cards[0].value_int
      )
      setImage(cups[0].image)
      setIcon(<FaGlassMartiniAlt size={20} />)
    }

    if (data.cards[0].suit === 'swords') {
      const swords = cards_swords.filter(
        element => element.id === data.cards[0].value_int
      )
      setImage(swords[0].image)
      setIcon(<RiSwordLine size={25} />)
    }

    if (data.cards[0].suit === 'wands') {
      const wands = cards_wands.filter(
        element => element.id === data.cards[0].value_int
      )
      setImage(wands[0].image)
      setIcon(<ImMagicWand size={20} />)
    }
    setLoading(false)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <section>
      <h1 className="title">{`${image === cardback ? '' : name} ${
        image != cardback && isRev ? ' - Reverse' : ''
      }`}</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          className={`${image === cardback ? 'backcard-img' : 'card-img'} ${
            isRev ? 'card-rev' : ''
          }`}
          src={image}
          alt=""
          onClick={() => {
            if (image === cardback) {
              fetchInfo()
            }
          }}
        />

        <Box
          display={image === cardback ? 'none' : ''}
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
          onClick={handleClick}
        >
          Pick another card
        </Box>
        <HStack
          spacing={10}
          display={image === cardback ? 'none' : ''}
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
        {/* <HStack
          display={image === cardback ? 'none' : 'flex'}
          flexWrap={'wrap'}
        >
          {meaningUp.map((word, index) => {
            return (
              <Tag
                display={'flex'}
                ml={'0.5rem'}
                size={'sm'}
                variant="subtle"
                colorScheme="purple"
                key={index}
              >
                <TagLabel>{word}</TagLabel>
              </Tag>
            )
          })}
        </HStack> */}
      </div>
      <p className="subtitle">{`${image === cardback ? '' : desc}`}</p>
    </section>
  )
}

export default Card
