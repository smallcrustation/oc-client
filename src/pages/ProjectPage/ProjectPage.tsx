import React, { useEffect, useState } from 'react'
// import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
// import ProjectsImportService, {images} from '../../services/projects-import-service'
// import Img from 'react-image'
// import ImgLoader from '../../components/ImgLoader/ImgLoader'
import { useLocation } from 'react-router-dom'
import imageApiService from '../../services/image-api-service'

interface Project {
  name: string
  url: string[] | undefined
}

const ProjectPage = () => {
  const [project, setProject] = useState<Project>()
  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const address = useParams<string>()

  // async function in useEffect
  async function getUrlsForProjectByName(projectName: string) {
    // each project in projectNames send api request and add url for display image[0]
    // setloading(true)
    try {
      let projectRes = await imageApiService.getProjectImageUrls(projectName)
      // console.log( await res.json())
      projectRes = await projectRes.json()
      // console.log(projectRes.imgUrls[0])
      setProject({ name: projectName, url: projectRes.imgUrls })
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
      // if(projectProp.projectProp)
      // console.log(projectProp.projectProp)
      // setProject({projectProp.projectProp})
      // console.log(project)
    } else {
      getUrlsForProjectByName(address)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log()
  return (
    <div className="ProjectPage">
      {console.log(project)}
      {loading ? 'loading...' : `${project?.name} GOOD TO GO`}
    </div>
  )
}

export default ProjectPage
