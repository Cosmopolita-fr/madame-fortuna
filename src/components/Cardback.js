import React, { useState } from 'react'
import cardback_img from '../assets/cardback.png'

function Cardback() {
  const [cardback, setCardback] = useState(true)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img className={'backcard-img'} src={cardback_img} alt="Cardback Image" />
    </div>
  )
}

export default Cardback
