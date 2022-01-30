import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import Tags from './Tags'
import Error from '../pages/Error'

/* data */
import { deck } from '../data.js'

/* Chakra */

import { useParams } from 'react-router-dom'

function Card() {
  const { id } = useParams()
  const [card, setCard] = useState(deck[id])
  const { name, image, desc, suit, meaning_up, meaning_rev } = card

  return (
    <div>
      <h1 className="title">{name}</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img className="card-img" src={image} alt="" />
      </div>
      <Tags suit={suit} meaning_up={meaning_up} meaning_rev={meaning_rev} />
      <p className="subtitle">{desc}</p>
    </div>
  )
}

export default Card
