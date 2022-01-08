import React, { useState, useEffect } from 'react'
import cardback from '../assets/cardback.svg'
import {
  cards_major,
  cards_wands,
  cards_cups,
  cards_swords,
  cards_pents
} from '../data'

const Card = () => {
  const [card, setCard] = useState([])
  const [image, setImage] = useState(cardback)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [isRev, setIsRev] = useState(false)

  const [loading, setloading] = useState(false)

  const rotateCard = () => {
    const random_boolean = Math.random() < 0.5
    setIsRev(random_boolean)
  }

  const handleClick = () => {
    setImage(cardback)
  }

  const randomCard = () => {
    // project review - no repeat rng

    const min = 0
    const max = cards_swords[0].length
    const random = Math.floor(Math.random() * (max - min)) + min
    setCard(cards_swords[0][random].image)
  }

  const fetchInfo = async () => {
    const response = await fetch(
      'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1'
    )
    const data = await response.json()

    setName(data.cards[0].name)
    setDesc(data.cards[0].desc)

    if (data.cards[0].type === 'major') {
      const major = cards_major.filter(
        element => element.id === data.cards[0].value_int
      )
      console.log(major[0].image)
      setImage(major[0].image)
    }

    if (data.cards[0].suit === 'pentacles') {
      const pentacles = cards_pents.filter(
        element => element.id === data.cards[0].value_int
      )
      setImage(pentacles[0].image)
    }

    if (data.cards[0].suit === 'cups') {
      const cups = cards_cups.filter(
        element => element.id === data.cards[0].value_int
      )
      setImage(cups[0].image)
    }

    if (data.cards[0].suit === 'swords') {
      const swords = cards_swords.filter(
        element => element.id === data.cards[0].value_int
      )
      setImage(swords[0].image)
    }

    if (data.cards[0].suit === 'wands') {
      const wands = cards_wands.filter(
        element => element.id === data.cards[0].value_int
      )
      console.log(wands[0].image)
      setImage(wands[0].image)
    }
  }

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <section>
      <div>
        <img
          className={`${isRev ? 'card-img card-rev' : 'card-img'}`}
          src={image}
          alt=""
          onClick={fetchInfo}
        />
        <button className="button-primary" onClick={handleClick}>
          PICK ANOTHER CARD
        </button>
        <h1 className="title">{name}</h1>
        <p className="subtitle">{desc}</p>
      </div>
      <div></div>
    </section>
  )
}

export default Card
