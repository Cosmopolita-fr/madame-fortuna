import React from 'react'
import cardback from '../assets/cardback.png'
import { Spinner } from '@chakra-ui/react'

function Loading() {
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
      <img className="backcard-img" src={cardback} alt="" />
      <Spinner
        position={'absolute'}
        thickness="0.8rem"
        speed="0.65s"
        emptyColor="#fcf5d7ff"
        color="#39313eff"
        size="xl"
      />
    </div>
  )
}

export default Loading
