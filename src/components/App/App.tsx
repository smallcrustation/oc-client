import React, { useState } from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from '../Header/Header'

import './App.scss'
import LandingPage from '../../pages/LandingPage/LandingPage'
import Footer from '../Footer/Footer'
import AboutPage from '../../pages/AboutPage/AboutPage'
import ProjectPage from '../../pages/ProjectPage/ProjectPage'
import ContactPage from '../../pages/ContactPage/ContactPage'
import PortfolioPage from '../../pages/PortfolioPage/PortfolioPage'

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
        <Header toggleTheme={toggleTheme} theme={theme} />

      <main className="App__main">
        {/* <Header toggleTheme={toggleTheme} theme={theme}/> */}
  
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/about'} component={AboutPage} />
          <Route exact path={'/project/:address'} component={ProjectPage}/>
          <Route exact path={'/contact'} component={ContactPage}/>
          <Route exact path={'/portfolio'} component={PortfolioPage}/>
        </Switch>

        {/* <Footer/> */}
      </main>
      <Footer/>
    </div>
  )
}

export default App
