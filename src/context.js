import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react' --> fetchCards

// icons
import { GiPentacle, GiHandOfGod } from 'react-icons/gi'
import { RiSwordLine } from 'react-icons/ri'
import { FaGlassMartiniAlt } from 'react-icons/fa'
import { ImMagicWand } from 'react-icons/im'

// data
import cardback from './assets/cardback.png'
import { deck } from './data.js'

const url = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [card, setCard] = useState({})
  const [icon, setIcon] = useState('')
  const [isRev, setIsRev] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const getRandom = () => {
    let newCard = deck[Math.floor(Math.random() * deck.length)]
    if (newCard.suit === 'major') {
      setIcon(<GiHandOfGod />)
    }
    if (newCard.suit === 'pentacles') {
      setIcon(<GiPentacle />)
    }
    if (newCard.suit === 'swords') {
      setIcon(<RiSwordLine />)
    }
    if (newCard.suit === 'cups') {
      setIcon(<FaGlassMartiniAlt />)
    }
    if (newCard.suit === 'wands') {
      setIcon(<ImMagicWand />)
    }

    setCard(newCard)
  }
  useEffect(() => {
    getRandom()

    return () => {
      getRandom()
    }
  }, [])

  return (
    <AppContext.Provider
      value={{ card, setCard, icon, setIcon, isLoading, setLoading }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
