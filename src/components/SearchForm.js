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

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('major')
  const searchValue = useRef('')

  const searchCard = () => {
    setSearchTerm(searchValue.current.value)
  }

  return (
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
  )
}

export default SearchForm
