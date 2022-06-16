import React, { useState, useContext } from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../services/get-window-dimensions'

// so the header LOGOUT button toggles on state change...
import {AuthUserContext} from '../../contexts/AuthUserContext'

type Props = {
  toggleTheme: Function
  theme: string
}

const Header = ({ toggleTheme, theme }: Props) => {
  const authUserContext = useContext(AuthUserContext)

  const [displayMenu, setDisplayMenu] = useState(false)  

  const { windowWidth } = useWindowDimensions()

  const toggleDisplayMenu = () => {
    setDisplayMenu(!displayMenu)
  }

  const logOut = () => {
    console.log('logout')
    authUserContext?.logOut()
  }

  // If screen below 800px show hamburger menu
  if (windowWidth > 850) {
    return (
      <header className="Header">
        <div className="header-top">
          <div className="logo">
            <Link to="/">
              <span className="logo-first">Oberholtzer </span>

              <span className="logo-second">Construction</span>
              <br />
              <div>
                <span>build • &nbsp;</span>
                <span> invest • &nbsp;</span>
                <span> real estate</span>
              </div>
              {/* <span>build</span> • <span>invest</span> • <span>real estate</span> */}
              {/* build | invest */}
            </Link>
          </div>

          <div>
          {authUserContext?.auth ? <button onClick={logOut}>Logout</button> : ''}
          </div>

          <nav>
            <div className="menu-item txt">
              <Link to="/about">About</Link>
            </div>
            <div className="menu-item">•</div>
            <div className="menu-item txt">
              <Link to="/portfolio">Portfolio</Link>
            </div>
            <div className="menu-item">•</div>
            <div className="menu-item txt">
              <Link to="/contact">Contact</Link>
            </div>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </nav>
        </div>
      </header>
    )
  } else {
    return (
      <header className="Header">
        <div className="header-top">
          <div className="logo">
            <Link to="/">
              <span className="logo-first">Oberholtzer </span>

              <span className="logo-second">Construction</span>
              <br />
              <div>
                <span>build • &nbsp;</span>
                <span> invest • &nbsp;</span>
                <span> real estate</span>
              </div>
              {/* <span>build</span> • <span>invest</span> • <span>real estate</span> */}
              {/* build | invest */}
            </Link>
          </div>

          <div className="right">
            {/* <div className="theme-toggle" onClick={() => toggleTheme('night')}>Toggle Theme</div> */}
            {/* <ThemeToggle toggleTheme={toggleTheme} theme={theme} /> */}
            <Nav toggleDisplayMenu={toggleDisplayMenu} />
          </div>
        </div>

        <div className="line-break"></div>

        <div className={`menu-drop-down ${displayMenu ? '' : 'hidden'}`}>
          {/* <div className=""> */}
          <div className="menu-item txt">
            <Link to="/about">About</Link>
          </div>
          <div className="menu-item">•</div>
          <div className="menu-item txt">
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="menu-item">•</div>
          <div className="menu-item txt">
            <Link to="/contact">Contact</Link>
          </div>
          {/* </div> */}
          {/* <div>•</div> */}
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
      </header>
    )
  }
}

export default Header
