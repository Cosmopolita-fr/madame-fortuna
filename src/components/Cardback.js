import React, { useRef, useState, useEffect } from 'react'
import cardback_img from '../assets/cardback.png'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Loading from './Loading'

import { Stack, Switch } from '@chakra-ui/react'
import Card from './Card'

function Cardback() {
  const { isLoading, setLoading } = useGlobalContext()
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
    }, 500)
  }

  useEffect(() => {
    getRandomCard()
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
      <h1 className="title" style={{ textAlign: 'center' }}>
        Mentalize uma pergunta e descubra o que a Fortuna te reserva...
      </h1>
    </div>
  )
}

export default Cardback
