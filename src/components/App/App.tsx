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
import LoginPage from '../../pages/LoginPage/LoginPage'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import imageApiService from '../../services/image-api-service'
import CreateUserPage from '../../pages/CreateUserPage/CreateUserPage'

interface Project {
  name: string
  url: string[] | undefined
  description: string[] | undefined
  address: string[] | undefined
  architect: string[] | undefined
  pretty_name: string[] | undefined
  bedrooms: string[] | undefined
  bathrooms: string[] | undefined
  square_footage: string[] | undefined
  data_1: string[] | undefined
  data_2: string[] | undefined
  data_3: string[] | undefined
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
        // const resTEST = await imageApiService.getProjects()
        //   .then(res => res.text()).then(text => console.log(text))

        // ===== GET ALL PROJECT DATA FOR ALL PROJECT DATA, ok for so few projects ====
        // would not do it like this with more time... would only request data when needed.
        const res = await imageApiService.getProjects()
        // console.log(res)
        let projectsList = await res.json()
        projectsList = projectsList.projectsList
        // console.log(projectsList)
        for (let i = 0; i < projectsList.length; i++) {
          // console.log(projectsList[i].img_urls)
          let project: Project = {
            name: projectsList[i].name,
            url: orderUrls(projectsList[i].img_urls),
            description: projectsList[i].description,
            address: projectsList[i].address,
            architect: projectsList[i].architect,
            pretty_name: projectsList[i].pretty_name,
            bedrooms: projectsList[i].bedrooms,
            bathrooms: projectsList[i].bathrooms,
            square_footage: projectsList[i].square_footage,
            data_1: projectsList[i].data_1,
            data_2: projectsList[i].data_2,
            data_3: projectsList[i].data_3
          }
          // console.log(project)
          if (projectsContext.addProject) {
            projectsContext.addProject(project)
          }
        }
      } catch (e) {
        // console.log('error')
        console.error(e)
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
          <Route exact path={'/admin'} component={LoginPage} />
          <Route exact path={'/createUser'} component={CreateUserPage} />
        </Switch>

        {/* <Footer/> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
