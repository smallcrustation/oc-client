import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImgLoader from '../ImgLoader/ImgLoader'
import imageApiService from '../../services/image-api-service'

interface Project {
  name: string
  url: string | undefined
}

interface ImageListItemProps {
  projectName: string
  // index: number
}

const ImageListItem: React.FC<ImageListItemProps> = ({ projectName }) => {
  const [loading, setloading] = useState(true)
  const [project, setProject] = useState<Project>({ name: '', url: '' })

  useEffect(() => {
    // async function in useEffect
    async function getUrlsForLandingPageProjects() {
      // each project in projectNames send api request and add url for display image[0]
      // setloading(true)
      try {
        let projectRes = await imageApiService.getProjectImageUrls(projectName)
        // console.log( await res.json())
        projectRes = await projectRes.json()
        // console.log(projectRes.imgUrls[0])
        setProject({ name: projectName, url: projectRes.imgUrls[0] })
        setloading(false)
      } catch (e) {
        console.error(e)
      }
    }
    getUrlsForLandingPageProjects()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const displayProjectItem = () => {
  //   if (project.url) {
  //     setloading(false)
  //     return (
  //       <li>
  //         <Link to={`/project/${project.name}`}>
  //           <img src={project.url} alt="A Beautiful House" />
  //         </Link>
  //       </li>
  //     )
  //   } else {
  //     return (
  //       <li>
  //         <ImgLoader />
  //       </li>
  //     )
  //   }
  // }

  return (
    <div className="img-container">
      {loading? (
        <ImgLoader />
      ) : (
        <li>
          <Link to={`/project/${project.name}`}>
            <img src={project.url} alt="A Beautiful House" />
          </Link>
        </li>
      )}
    </div>
  )
}

export default ImageListItem
