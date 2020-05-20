import React from 'react'
import { Link } from 'react-router-dom'
// import ImgLoader from '../ImgLoader/ImgLoader'

interface Project {
  name: string
  url: string[] | undefined
}

interface ImageListItemLandingProps {
  project: Project
}

const ImageListItemLanding: React.FC<ImageListItemLandingProps> = ({
  project,
}) => {
  const renderImageListItemLanding = () => {
    if (project.url) {
      return (
        <li>
          <Link
            to={{ pathname: `/project/${project.name}`, state: { project } }}
          >
            <img src={project.url[0]} alt="A Beautiful House" />
          </Link>
        </li>
      )
    } else {
      return <div>Error... no url</div>
    }
  }

  return (
    <div className="img-container">
      {renderImageListItemLanding()}
    </div>
  )
}

export default ImageListItemLanding
