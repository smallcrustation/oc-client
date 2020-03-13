import React, {useState} from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

type Props = {
  toggleTheme: Function
  theme: string
}

const Header = ({ toggleTheme, theme }: Props) => {
  const [displayMenu, setDisplayMenu] = useState(false)

  const toggleDisplayMenu = () => {
    setDisplayMenu(!displayMenu)
  }

  return (
    <header className="Header">
      <div className="header-top">
        <div className="logo">
          <span>Oberholtzer</span>
       
          <span>Construction</span>
        </div>

        <div className="right">
          {/* <div className="theme-toggle" onClick={() => toggleTheme('night')}>Toggle Theme</div> */}
          {/* <ThemeToggle toggleTheme={toggleTheme} theme={theme} /> */}
          <Nav toggleDisplayMenu={toggleDisplayMenu}/>
        </div>
      </div>

      <div className="line-break"></div>

      <div className={`menu-drop-down ${displayMenu?'':'hidden'}`}>
        {/* <div className=""> */}
        <div className="menu-item">About</div>
        <div className="menu-item">•</div>
        <div className="menu-item">Portfolio</div>
        <div className="menu-item">•</div>
        <div className="menu-item">Contact</div>
        {/* </div> */}
        {/* <div>•</div> */}
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      </div>

    </header>
  )
}

export default Header
