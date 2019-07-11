import React from 'react'

const Card = ({ name }) => {
  return (
    <>
      {name}
      <img src={`https://robohash.org/${name}`} />
    </>
  )
}

export default Card