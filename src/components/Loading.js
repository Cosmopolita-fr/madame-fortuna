import React from 'react'
import cardback from '../assets/cardback.png'
import { Triangle } from 'react-loader-spinner'

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
      <Triangle arialLabel="loading-indicator" color="blueviolet" />
    </div>
  )
}

export default Loading
