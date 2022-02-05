import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import cardback_img from '../assets/cardback.png'

function Cardback() {
  const { setLoading, setIsSearchPage } = useGlobalContext()
  const [id, setId] = useState('')

  function getRandomCard(min = 0, max = 77) {
    setLoading(true)
    min = Math.ceil(min)
    max = Math.floor(max)
    setId(Math.floor(Math.random() * (max - min + 1)) + min)
    setLoading(false)
  }

  const timeOut = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 750)
  }

  useEffect(() => {
    getRandomCard()
    setIsSearchPage(false)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem'
      }}
    >
      <Link to={`/card/${id}`} onClick={timeOut}>
        <img
          as="Button"
          className={'backcard-img'}
          src={cardback_img}
          alt="Cardback"
        />
      </Link>
    </div>
  )
}

export default Cardback
