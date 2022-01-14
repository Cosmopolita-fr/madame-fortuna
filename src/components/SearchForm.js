import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { FormControl, FormLabel, FormHelperText, Input } from '@chakra-ui/react'

import {
  cards_major,
  cards_wands,
  cards_cups,
  cards_swords,
  cards_pents
} from '../data'
import CardList from './CardList'

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('major')
  const [cards, setCards] = useState([])
  const searchValue = useRef('')

  const searchCard = () => {
    setSearchTerm(searchValue.current.value.toLowerCase().replace(/\s/g, '+'))
  }

  const fetchInfo = async () => {
    // const url = `https://rws-cards-api.herokuapp.com/api/v1/cards/search?q=${searchTerm}`

    if (searchTerm === 'major') {
      setCards(cards_major)
    } else if (searchTerm === 'pentacles') {
      setCards(cards_pents)
    } else if (searchTerm === 'wands') {
      setCards(cards_wands)
    } else if (searchTerm === 'cups') {
      setCards(cards_cups)
    } else if (searchTerm === 'swords') {
      setCards(cards_swords)
    }
    /* else {
      const response = await fetch(url)
      const data = await response.json()

      let cards = []
      data.cards.map(item => {
        if (item.type === 'major') {
          let card = cards_major.find(element => element.id === item.value_int)
          cards.push(card)
        } else if (item.suit === 'swords') {
          let card = cards_swords.find(element => element.id === item.value_int)
          cards.push(card)
        } else if (item.suit === 'pentacles') {
          let card = cards_pents.find(element => element.id === item.value_int)
          cards.push(card)
        } else if (item.suit === 'cups') {
          let card = cards_cups.find(element => element.id === item.value_int)
          cards.push(card)
        } else if (item.suit === 'wands') {
          let card = cards_wands.find(element => element.id === item.value_int)
          cards.push(card)
        }

        setCards(cards)

         */
  }

  useEffect(() => {
    fetchInfo()
    return () => {
      fetchInfo()
    }
  }, [searchTerm])

  return (
    <>
      <section>
        <FormControl m={10} w={'50%'}>
          <FormLabel htmlFor="search" fontSize="2xl" fontFamily="Eczar">
            Search a card
          </FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            variant="flushed"
            focusBorderColor="blueviolet"
            fontSize="lg"
            fontFamily="Eczar"
            placeholder="major"
            _placeholder={{ opacity: '1' }}
            ref={searchValue}
            onChange={searchCard}
          />
          <FormHelperText>Sample text</FormHelperText>
        </FormControl>
      </section>
      <CardList cards={cards} />
    </>
  )
}

export default SearchForm
