import React from 'react'

const SearchBox = ({ onSearchChange, text }) => {
  return (
    <>
      SearchBox
      <input type='text' value={text} onChange={onSearchChange} />
    </>
  )
}

export default SearchBox