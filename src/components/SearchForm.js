import React from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import { FormControl, FormLabel, FormHelperText, Input } from '@chakra-ui/react'

import { deck } from '../data.js'
import CardList from './CardList'

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('')
  const [cards, setCards] = useState([])
  const searchValue = useRef('')

  const searchCard = () => {
    // setSearchTerm(searchValue.current.value.toLowerCase().replace(/\s/g, '+'))
    setSearchTerm(searchValue.current.value.toLowerCase())
  }

  const filterItems = useCallback(() => {
    if (searchTerm === 'maior') {
      let newArr = []
      for (let i = 0; i < 22; i++) {
        newArr.push(deck[i])
      }
      setCards(newArr)
    } else if (searchTerm === 'menor') {
      let newArr = []
      for (let i = 22; i < 78; i++) {
        newArr.push(deck[i])
      }
      setCards(newArr)
    } else if (Number.parseInt(searchTerm[0])) {
      setCards(
        deck.filter(element => {
          return element.value.indexOf(searchTerm) > -1
        })
      )
    } else {
      setCards(
        deck.filter(element => {
          return element.name.toLowerCase().indexOf(searchTerm) > -1
        })
      )
    }
  }, [searchTerm])
  useEffect(() => {
    filterItems()
  }, [searchTerm, filterItems])

  return (
    <>
      <section>
        <FormControl m={10} w={'50%'}>
          <FormLabel
            htmlFor="search"
            fontSize="2xl"
            fontFamily="Alegreya, serif"
            color="#fcf5d7ff"
          >
            Search a card
          </FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            variant="flushed"
            focusBorderColor="#fcf5d7ff"
            fontSize="lg"
            fontFamily="Alegreya, serif"
            color="#fcf5d7ff"
            placeholder="maior"
            _placeholder={{ opacity: '1' }}
            ref={searchValue}
            onChange={searchCard}
          />
          <FormHelperText>
            Você pode pesquisar por nome, naipe, número, maior ou menor;
          </FormHelperText>
        </FormControl>
      </section>
      <div className="cardlist">
        <CardList cards={cards} />
      </div>
    </>
  )
}

export default SearchForm
