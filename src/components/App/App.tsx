import React, { useState } from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from '../Header/Header'

import './App.scss'
import LandingPage from '../../pages/LandingPage/LandingPage'

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
      <main className="App__main">
        <Header toggleTheme={toggleTheme} theme={theme}/>
  
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
        </Switch>
      </main>
    </div>
  )
}

export default App