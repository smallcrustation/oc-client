import React from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'

type Props = { toggleTheme: Function }

const Header = ({ toggleTheme }: Props) => {

  return(
   <header className="Header">
     <h1>Header</h1>
     <button onClick={() => toggleTheme('night')}>Toggle Theme</button>
     <Nav />
   </header>)
}

export default Header
