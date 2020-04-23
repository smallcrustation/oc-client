import React from 'react'
import {Link} from 'react-router-dom'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="logo">
        <span>Oberholtzer</span>

        <span>Construction</span>
      </div>
      <nav className="footer-nav">
        <div className="menu-item txt">
        <Link to="/about">About</Link>
        </div>
        <div className="menu-item">|</div>
        <div className="menu-item txt">
        <Link to="/Portfolio">Portfolio</Link>
        </div>
        <div className="menu-item">|</div>
        <div className="menu-item txt">
        <Link to="/Contact">Contact</Link>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
