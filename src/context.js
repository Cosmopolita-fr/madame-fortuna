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
  const [randomCard, setRandomCard] = useState({})
  const [isRev, setIsRev] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const getRandom = () => {
    setLoading(true)
    let newCard = deck[Math.floor(Math.random() * deck.length)]
    setRandomCard(newCard)
    setLoading(false)
  }

  useEffect(() => {
    getRandom()

    return () => {
      getRandom()
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        randomCard,
        setRandomCard,
        isLoading,
        setLoading
      }}
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
