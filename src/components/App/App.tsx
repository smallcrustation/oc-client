import React, { useState, useEffect, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'

import './App.scss'
import LandingPage from '../../pages/LandingPage/LandingPage'
import Footer from '../Footer/Footer'
import AboutPage from '../../pages/AboutPage/AboutPage'
import ProjectPage from '../../pages/ProjectPage/ProjectPage'
import ContactPage from '../../pages/ContactPage/ContactPage'
import PortfolioPage from '../../pages/PortfolioPage/PortfolioPage'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import imageApiService from '../../services/image-api-service'

interface Project {
  name: string
  url: string[] | undefined
}

function App() {
  const [theme, setTheme] = useState<string>('day')

  const projectsContext = useContext(ProjectsContext)

  // incase the future holds many themes
  // let chooseTheme = (theme: string) => {
  //   setTheme(theme)
  // }

  const toggleTheme = () => {
    theme === 'day' ? setTheme('night') : setTheme('day')
  }

  const orderUrls = (projectResUrls: Array<string>) => {
    const sortedResults = projectResUrls.sort((urlA, urlB) => {
      // console.log(urlA.split('/').slice(-1)[0].split('_', 1)[0], urlB)

      const a: number = parseInt(urlA.split('/').slice(-1)[0].split('_', 1)[0])
      const b: number = parseInt(urlB.split('/').slice(-1)[0].split('_', 1)[0])
      // console.log(a, ' - ', b)
      return a - b
    })

    return sortedResults
  }

  // set context for properties
  useEffect(() => {
    // try {
    const getProjects = async () => {
      try {
        const res = await imageApiService.getProjects()
        let projectsList = await res.json()
        projectsList = projectsList.projectsList
        // console.log(projectsList)
        for (let i = 0; i < projectsList.length; i++) {
          // console.log(projectsList[i].img_urls)
          let project: Project = {
            name: projectsList[i].name,
            url: orderUrls(projectsList[i].img_urls),
          }
          // console.log(project)
          if (projectsContext.addProject) {
            projectsContext.addProject(project)
          }
        }
      } catch (e) {
        // console.log('error')
        console.log(e)
      }

      // console.log(projectsContext.projectsList)
      // console.log('App')
    }
    getProjects()

    // } catch (e) {
    // console.log('ERORRROR')
    // console.error(e)
    // }

    // console.log(projectsContext.projectsList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`App theme-${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />

      <main className="App__main">
        {/* <Header toggleTheme={toggleTheme} theme={theme}/> */}

        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/about'} component={AboutPage} />
          <Route exact path={'/project/:address'} component={ProjectPage} />
          <Route exact path={'/contact'} component={ContactPage} />
          <Route exact path={'/portfolio'} component={PortfolioPage} />
        </Switch>

        {/* <Footer/> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
