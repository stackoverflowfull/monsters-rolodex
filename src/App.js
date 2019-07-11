import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBox from './components/search-box/search-box'
import CardList from './components/card-list/card-list'

const App = () => {

  const [monsters, setMonsters] = useState([])
  const [filtered, setFiltered] = useState([])
  const [text, setText] = useState('')

  const onSearchChange = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    console.log('didmount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(results => setMonsters(results))
  }, [])

  useEffect(() => {
    console.log('when changing text')
    setFiltered(monsters.filter(monster => monster.name.toLowerCase().includes(text.toLowerCase())))
  }, [text])

  // const filteredMonsters = useCallback(() => {
  //   console.log('wow')
  //   setFiltered(monsters.filter(monster => monster.name.toLowerCase().includes(text.toLowerCase())))
  // }, [text])

  
  return (
    <>
      <h1>monsters rolodex</h1>
      <SearchBox onSearchChange={onSearchChange} text={text} />
      <CardList monsters={filtered} />
    </>
  );
}

export default App;
