import React from 'react'
function CardList({ cards }) {
  return (
    <>
      {cards.map(card => {
        const { id, image } = card
        return (
          <div key={id} style={{ display: 'flex', justifyContent: 'center' }}>
            <img className="card-img" src={image} alt="" />
          </div>
        )
      })}
    </>
  )
}

export default CardList
