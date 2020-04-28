import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import ImgLoader from '../ImgLoader/ImgLoader'
// import imageApiService from '../../services/image-api-service'

// interface Project {
//   name: string
//   url: string | undefined
// }

// interface ImageListItemPropWithProjectName {
//   projectName: string
// }

// interface ImageListItemPropWithProjectObject {
//   project: Project

// }

// type ImageListItemProps = ImageListItemPropWithProjectName | ImageListItemPropWithProjectObject

interface ImageListItemProjectProps {
  imageUrl: string
}

const ImageListItemProject: React.FC<ImageListItemProjectProps> = ({
  imageUrl,
}) => {
  const [loading, setloading] = useState(true)

  useEffect(
    () => {},

    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <div className="img-container">
      {!imageUrl ? (
        <ImgLoader />
      ) : (
        <li>
          {/* <Link
            to={{ pathname: `/project/${project.name}`, state: { project } }}
          > */}
          <img src={imageUrl} alt="A Beautiful House" />
          {/* </Link> */}
        </li>
      )}
    </div>
  )
}

export default ImageListItemProject
