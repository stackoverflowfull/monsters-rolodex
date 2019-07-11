import React from 'react'

import Card from '../card/card'

const CardList = ({ monsters }) => {
  return (
    <>
      {monsters.map(monster => <Card key={monster.id} name={monster.name} />)}
    </>
  )
}

export default CardList