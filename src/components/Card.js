import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import Tags from './Tags'
import Error from '../pages/Error'
import Loading from './Loading'

/* data */
import { deck } from '../data.js'

import { BsArrowLeftShort } from 'react-icons/bs'
/* Chakra */
import { Button } from '@chakra-ui/react'

import { Link, useParams, useNavigate } from 'react-router-dom'

function Card() {
  const { id } = useParams()
  const [isRandom, setIsRandom] = useState(false)
  const [card, setCard] = useState(deck[id] || deck[0])
  const { isLoading, setLoading } = useGlobalContext()
  let navigate = useNavigate()

  if (isLoading) {
    return <Loading />
  }
  if (id > 77) {
    return <Error />
  }

  const goBack = () => {
    navigate(-1)
  }

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
        <Link to=""></Link>
        <Button
          mt={2}
          color="#fcf5d7ff"
          variant="outline"
          borderColor={'#fcf5d7ff'}
          leftIcon={<BsArrowLeftShort size={25} />}
          _focus={{
            color: '#fcf5d7ff'
          }}
          onClick={goBack}
        >
          Voltar
        </Button>
      </div>
      <Tags suit={suit} meaning_up={meaning_up} meaning_rev={meaning_rev} />
      <p className="subtitle">{desc}</p>
    </div>
  )
}

export default Card
