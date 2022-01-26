import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react' --> fetchCards

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

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [card, setCard] = useState({})
  const [image, setImage] = useState(cardback)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [suit, setSuit] = useState('Major')
  const [icon, setIcon] = useState('')
  const [meaningUp, setMeaningUp] = useState([])
  const [isRev, setIsRev] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const getRandom = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
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

  return (
    <AppContext.Provider value={{ loading, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
