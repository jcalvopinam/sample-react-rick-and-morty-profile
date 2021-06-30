import React from 'react'
import Characters from './Characters'

const Header = ({ title }) => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="text">This project illustrates the characters of the famous series Rick and Morty.</p>
        </div>
      </div>
      <Characters />
    </header>
  )
}

export default Header
