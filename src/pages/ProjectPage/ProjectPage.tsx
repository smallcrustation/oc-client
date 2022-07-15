import React, { useEffect, useState, useContext } from 'react'
// import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
// import ProjectsImportService, {images} from '../../services/projects-import-service'
// import Img from 'react-image'
// import ImgLoader from '../../components/ImgLoader/ImgLoader'
// import { useLocation } from 'react-router-dom'
// import imageApiService from '../../services/image-api-service'
import ImageList from '../../components/ImageList/ImageList'
// import ImgLoader from '../../components/ImgLoader/ImgLoader'
import './ProjectPage.scss'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import {Project} from '../../contexts/ProjectsContext'

// interface Project {
//   name: string
//   url: string[] | undefined
// }

const ProjectPage = () => {
  const [project, setProject] = useState<Project>()
  // const [loading, setLoading] = useState(true)

  const {address} = useParams()
  const projectsContext = useContext(ProjectsContext)  

  // console.log(project)

  useEffect(() => {

    let tempProject = projectsContext.projectsList?.find(project => {
      return project.name === address
    })

    setProject(tempProject)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsContext])

  return (
    <div className="ProjectPage">
      <ImageList page={'project'} project={project}/>
    </div>
  )
}

export default ProjectPage
