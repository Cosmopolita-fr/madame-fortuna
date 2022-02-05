import React from 'react'
import Cardback from '../components/Cardback'
import SwitchReverseCard from '../components/SwitchReverseCard'
function Home() {
  return (
    <>
      <Cardback />
      <SwitchReverseCard />
      <h1
        className="title"
        style={{ textAlign: 'center', marginBottom: '1rem' }}
      >
        Mentalize uma pergunta e descubra o que a Fortuna te reserva...
      </h1>
    </>
  )
}

export default Home
