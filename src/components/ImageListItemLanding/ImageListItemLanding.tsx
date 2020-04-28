import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImgLoader from '../ImgLoader/ImgLoader'
import imageApiService from '../../services/image-api-service'

interface Project {
  name: string
  url: string[] | undefined
}

// interface ImageListItemPropWithProjectName {
//   projectName: string
// }

// interface ImageListItemPropWithProjectObject {
//   project: Project

// }

// type ImageListItemProps = ImageListItemPropWithProjectName | ImageListItemPropWithProjectObject

interface ImageListItemLandingProps {
  projectName: string
}

const ImageListItemLanding: React.FC<ImageListItemLandingProps> = ({
  projectName,
}) => {
  const [loading, setloading] = useState(true)
  const [project, setProject] = useState<Project>({ name: '', url: [''] })

  async function getUrlsForProjectByName(projectName: string) {
    // each project in projectNames send api request and add url for display image[0]
    // setloading(true)
    try {
      let projectRes = await imageApiService.getProjectImageUrls(projectName)
      // console.log( await res.json())
      projectRes = await projectRes.json()
      // console.log(projectRes.imgUrls[0])
      setProject({ name: projectName, url: projectRes.imgUrls })
      setloading(false)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(
    () => {
      // async function in useEffect
      getUrlsForProjectByName(projectName)
      // getUrlsForProjectByName(projectName)
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <div className="img-container">
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
