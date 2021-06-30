import React from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import './main.sass'
import './css/header.css'
import './css/character.css'

const App = () => {
  return (
    <>
      <Header title="Rick and Morty Profile" />
      <Characters />
    </>
  );
}

export default App;