import React, { useState, useEffect } from 'react'
import cardback from '../assets/cardback.svg'
import {
  cards_major,
  cards_wands,
  cards_cups,
  cards_swords,
  cards_pents
} from '../data'

import { Box, Button } from '@chakra-ui/react'

const Card = () => {
  const [card, setCard] = useState([])
  const [image, setImage] = useState(cardback)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [isRev, setIsRev] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const rotateCard = () => {
    const random_boolean = Math.random() < 0.5
    setIsRev(random_boolean)
  }

  const handleClick = () => {
    setImage(cardback)
  }

  const randomCard = () => {
    // project review - no repeat rng

    const min = 0
    const max = cards_swords[0].length
    const random = Math.floor(Math.random() * (max - min)) + min
    setCard(cards_swords[0][random].image)
  }

  const fetchInfo = async () => {
    rotateCard()
    const response = await fetch(
      'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1'
    )
    const data = await response.json()

    setName(data.cards[0].name)
    setDesc(data.cards[0].desc)

    if (data.cards[0].type === 'major') {
      const major = cards_major.filter(
        element => element.id === data.cards[0].value_int
      )
      console.log(major[0].image)
      setImage(major[0].image)
    }

    if (data.cards[0].suit === 'pentacles') {
      const pentacles = cards_pents.filter(
        element => element.id === data.cards[0].value_int
      )
      setImage(pentacles[0].image)
    }

    if (data.cards[0].suit === 'cups') {
      const cups = cards_cups.filter(
        element => element.id === data.cards[0].value_int
      )
      setImage(cups[0].image)
    }

    if (data.cards[0].suit === 'swords') {
      const swords = cards_swords.filter(
        element => element.id === data.cards[0].value_int
      )
      setImage(swords[0].image)
    }

    if (data.cards[0].suit === 'wands') {
      const wands = cards_wands.filter(
        element => element.id === data.cards[0].value_int
      )
      console.log(wands[0].image)
      setImage(wands[0].image)
    }
  }

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <section>
      <h1 className="title">{`${image === cardback ? '' : name}`}</h1>

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
        {/* <button
          className="button-primary"
          style={
            image === cardback ? { display: 'none' } : { display: 'inline' }
          }
          onClick={handleClick}
        >
          PICK ANOTHER CARD
        </button> */}
        <h1 className="title">{`${image === cardback ? '' : name}`}</h1>
        <p className="subtitle">{`${image === cardback ? '' : desc}`}</p>
      </div>
    </section>
  )
}

export default Card
