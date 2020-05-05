import React, { useEffect, useState } from 'react'
// import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
// import ProjectsImportService, {images} from '../../services/projects-import-service'
// import Img from 'react-image'
// import ImgLoader from '../../components/ImgLoader/ImgLoader'
import { useLocation } from 'react-router-dom'
import imageApiService from '../../services/image-api-service'
import ImageList from '../../components/ImageList/ImageList'
import ImgLoader from '../../components/ImgLoader/ImgLoader'
import './ProjectPage.scss'

interface Project {
  name: string
  url: string[] | undefined
}

interface ParamTypes {
  address: string
}

const ProjectPage = () => {
  const [project, setProject] = useState<Project>()
  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const projectNamesParam = useParams<ParamTypes>()

  const orderUrls = (projectResUrls: Array<string>) => {
    const sortedResults = projectResUrls.sort((urlA, urlB) => {
      // console.log(urlA.split('/').slice(-1)[0].split('_', 1)[0], urlB)

      const a: number = parseInt(urlA.split('/').slice(-1)[0].split('_', 1)[0])
      const b: number = parseInt(urlB.split('/').slice(-1)[0].split('_', 1)[0])
      // console.log(a, ' - ', b)
      return a - b
    });

    // console.log(sortedResults)

    return sortedResults
  }

  // async function in useEffect
  async function getUrlsForProjectByName(projectName: string) {
    // each project in projectNames send api request and add url for display image[0]
    // setloading(true)
    try {
      let projectRes = await imageApiService.getProjectImageUrls(projectName)
      // console.log( await res.json())
      projectRes = await projectRes.json()

      const orderedUrls = orderUrls(projectRes.imgUrls)

      setProject({ name: projectName, url: orderedUrls })
      setLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    // if coming from LandingPage just used the passed project prop ELSE you have to request from api
    if (location.state) {

      // console.log('location.state')

      const { project } = location.state as any

      // console.log(project)
      setProject(project)
      setLoading(false)
    } else if (projectNamesParam.address) {
      getUrlsForProjectByName(projectNamesParam.address)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // console.log(project)

  if (project && !loading) {
    return (
      <div className="ProjectPage">
        <ImageList project={project} />
      </div>
    )
  } else {
    return (
      <div className="ProjectPage">
        <ImgLoader />
      </div>
    )
  }
}

export default ProjectPage
