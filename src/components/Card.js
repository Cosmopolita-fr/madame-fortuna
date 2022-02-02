import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import Tags from './Tags/Tags'
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
  const [cardOrientation, setCardOrientation] = useState(false) // true == reverse
  const { isLoading, setLoading, isRev } = useGlobalContext()
  let navigate = useNavigate()

  const rotateCard = () => {
    if (isRev) {
      const random_boolean = Math.random() < 0.5
      setCardOrientation(random_boolean)
    }
  }

  useEffect(() => {
    rotateCard()
    console.log(isRev)
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (id > 77) {
    return <Error />
  }

  const goBack = () => {
    navigate(-1)
  }

  const { name, type, image, desc, suit, meaning_up, meaning_rev } = card

  return (
    <div>
      <h1 className="title">
        {cardOrientation ? `${name} - Invertida` : `${name}`}
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          className={'card-img'}
          src={image}
          alt=""
          style={cardOrientation ? { transform: 'rotate(180deg)' } : {}}
        />
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
      <Tags
        type={type}
        suit={suit}
        meaning_up={meaning_up}
        meaning_rev={meaning_rev}
        cardOrientation={cardOrientation}
        isRev={isRev}
      />
      <p className="subtitle">{desc}</p>
    </div>
  )
}

export default Card
