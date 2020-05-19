import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import ImgLoader from '../ImgLoader/ImgLoader'
import imageApiService from '../../services/image-api-service'
import { ProjectsContext } from '../../contexts/ProjectsContext'

interface Project {
  name: string
  url: string[] | undefined
}

interface ImageListItemLandingProps {
  projectName: string
}

const ImageListItemLanding: React.FC<ImageListItemLandingProps> = ({
  projectName,
}) => {
  const [loading, setloading] = useState(true)
  const [project, setProject] = useState<Project>({ name: '', url: [''] })

  const projectsContext = useContext(ProjectsContext)

  const orderUrls = (projectResUrls: Array<string>) => {
    const sortedResults = projectResUrls.sort((urlA, urlB) => {
      // console.log(urlA.split('/').slice(-1)[0].split('_', 1)[0], urlB)

      const a: number = parseInt(urlA.split('/').slice(-1)[0].split('_', 1)[0])
      const b: number = parseInt(urlB.split('/').slice(-1)[0].split('_', 1)[0])
      // console.log(a, ' - ', b)
      return a - b
    })

    // console.log(sortedResults)

    return sortedResults
  }

  async function getUrlsForProjectByName(projectName: string) {
    // each project in projectNames send api request and add url for display image[0]
    // setloading(true)
    try {
      let projectRes = await imageApiService.getProjectImageUrls(projectName)
      // console.log( await res.json())
      projectRes = await projectRes.json()

      // order urls by number
      projectRes.imgUrls = orderUrls(projectRes.imgUrls)

      // console.log(projectRes.imgUrls)

      // console.log(projectRes.imgUrls[0])
      setProject({ name: projectName, url: projectRes.imgUrls })
      // add project to context

       // projec0tsContext.projectsList.includes
        if (projectsContext.addProject) {
          projectsContext.addProject({
            name: projectName,
            url: projectRes.imgUrls,
          })
        }

      setloading(false)
    } catch (e) {
      console.error(e)
    }
  }

  // check if there is already URL list in Context
  useEffect(
    () => {

      const getProjects = async() => await imageApiService.getProjects()
      console.log(getProjects())

      // async function in useEffect
      // check if there is already URL list in Context
      if (projectsContext.projectsList) {
        // console.log('projectsContext.projectsList')
        let projectInContext = false
        for (let i=0; i< projectsContext.projectsList.length; i++) {
          // console.log(projectsContext.projectsList[i])
          if (projectsContext.projectsList[i].name === projectName){
            setProject({
              name: projectName,
              url: projectsContext.projectsList[i].url,
            })
          }
        }
        if (!projectInContext){
        getUrlsForProjectByName(projectName)
        }
     
        // getUrlsForProjectByName(projectName)
      } else {
        console.log('getUrlsForProjectByName(projectName)')
        getUrlsForProjectByName(projectName)
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  // console.log(projectsContext.projectsList)

  return (
    <div className="img-container">
        {/* <ImgLoader /> */}

      {loading ? (
        <ImgLoader />
      ) : project.url ? (
        <li>
          <Link
            to={{ pathname: `/project/${project.name}`, state: { project } }}
          >
            <img src={project.url[0]} alt="A Beautiful House" />
          </Link>
        </li>
      ) : (
        <div>ERROR</div>
      )}
    </div>
  )
}

export default ImageListItemLanding
