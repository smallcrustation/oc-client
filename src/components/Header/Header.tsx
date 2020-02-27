import React from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

type Props = { 
   toggleTheme: Function
   theme: string 
  }

const Header = ({ toggleTheme, theme }: Props) => {
  return (
    <header className="Header">
      <div className="logo">
        <span>Oberholtzer</span>
        <br />
        <span>Construction</span>
      </div>

      <div className="right">
        {/* <div className="theme-toggle" onClick={() => toggleTheme('night')}>Toggle Theme</div> */}
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        <Nav />
      </div>
    </header>
  )
}

export default Header
