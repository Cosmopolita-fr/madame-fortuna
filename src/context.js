import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react' --> fetchCards

import { useMediaQuery } from '@chakra-ui/react'

// data
import { deck } from './data.js'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isDesktop] = useMediaQuery('(min-width: 700px)')
  const [randomCard, setRandomCard] = useState({})
  const [isRev, setIsRev] = useState(true)
  const [isLoading, setLoading] = useState(false)
  const [isSearchPage, setIsSearchPage] = useState(false)

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
        setLoading,
        isRev,
        setIsRev,
        isSearchPage,
        setIsSearchPage,
        isDesktop
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
