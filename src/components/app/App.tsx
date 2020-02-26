import React, { useState } from 'react'
import Header from '../Header/Header'

import './App.scss'

function App() {
  const [theme, setTheme] = useState<string>('day')

  // incase the future holds many themes
  // let chooseTheme = (theme: string) => {
  //   setTheme(theme)
  // }

  const toggleTheme = () => {
    theme === 'day' ? setTheme('night') : setTheme('day')
  }

  return (
    <div className={`App theme-${theme}`}>
      <div className="app-container">
        <Header toggleTheme={toggleTheme} />
        <div className="card">Hello</div>
      </div>
    </div>
  )
}

export default App
