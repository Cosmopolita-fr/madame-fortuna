import React, { useState } from 'react'
import cardback_img from '../assets/cardback.png'

import { Link, Stack, Switch } from '@chakra-ui/react'
import Card from './Card'

function Cardback() {
  const [cardback, setCardback] = useState(true)
  const [id, setId] = useState(10)
  console.log(id)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Link to={`/card/:${id}`}>
        <img
          className={'backcard-img'}
          src={cardback_img}
          alt="Cardback Image"
        />
      </Link>
      <h1 className="title">
        Mentalize uma pergunta e descubra o que a Fortuna te reserva...
      </h1>
    </div>
  )
}

export default Cardback
