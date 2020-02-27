import React from 'react'
import './ThemeToggle.scss'
import Moon from '../../assets/icons/Moon'
import Sun from '../../assets/icons/Sun'

type Props = {
  toggleTheme: Function
  theme: string
}

const ThemeToggle = ({ toggleTheme, theme }: Props) => {
  const toggle = () => {
    toggleTheme()
  }

  return (
    <div className="ThemeToggle" onClick={toggle}>
      <div className={`sun-moon ${theme}`}>
        <Moon />
        <br />
        <br />
        <Sun />
      </div>
    </div>
  )
}

export default ThemeToggle
