import React, {useState} from 'react'
import './Nav.scss'

const Nav = () => {

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <nav className="Nav">
      <div className="menu-icon" onClick={toggleExpanded}>
        <div
          className={`menu-icon-top ${expanded ? 'menu-icon-top-expanded' : ''}`}
          
        ></div>
        <div
          className={`menu-icon-bottom ${expanded ? 'menu-icon-bottom-expanded' : ''}`}
        ></div>
      </div>
      <ul
        className={`NavMobile-ul-hidden ${
          expanded ? 'NavMobile-ul-visible' : ''
        }`}
      >
      
        {/* <li onClick={() => scrollTo('About')}>About</li> */}
        {/* <li onClick={() => scrollTo('ProjectsList')}>Projects</li> */}
        {/* <li onClick={() => scrollTo('Contact')}>Contact</li> */}
      </ul>
    </nav>
  )
}

export default Nav