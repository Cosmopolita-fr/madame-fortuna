import React, { useState, useEffect } from 'react'
import img from '../assets/RWS_Tarot_01_Magician.jpg'
import url from '../data'

const Card = () => {
  const [card, setCard] = useState([])

  const randomCard = () => {
    const min = 0
    const max = url.length
    const random = Math.floor(Math.random() * (max - min)) + min
    setCard(url[random])
  }
  const fetchImg = url => {}
  const fetchInfo = url => {}

  useEffect(() => {
    randomCard()
    return () => {
      randomCard()
    }
  }, [])

  return (
    <section>
      <div>
        <img className="card-img border-img" src={card} alt="" />
        <button className="button-primary" onClick={randomCard}>
          PICK ANOTHER CARD
        </button>
        <h1>Magician</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, quas
          repudiandae. Vitae iste, sit, dignissimos fugit dicta sint non aut
          enim voluptas odio eum alias deleniti doloremque ad excepturi veniam?
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, eos
          deserunt libero expedita minus iusto, dolor magnam nisi eius, vero
          molestiae beatae! Quod, quibusdam quia cupiditate nostrum cumque eius
          unde.
        </p>
      </div>
    </section>
  )
}

export default Card
