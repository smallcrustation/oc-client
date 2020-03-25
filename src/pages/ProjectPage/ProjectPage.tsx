import React from 'react'
// import React, {useState, useEffect} from 'react'
// import {useParams} from "react-router"
// import ProjectsImportService, {images} from '../../services/projects-import-service'
import Img from 'react-image'
import ImgLoader from '../../components/ImgLoader/ImgLoader'

interface images {
  [key: string]: string
}

const ProjectPage = () => {
  
  // const [images, setImages] = useState<images>()

  // let {address} = useParams()

  return (
    <div className="ProjectPage">
      <h1>Project {'address'}</h1>
      <Img src={true?'image':''}
        loader={<ImgLoader/>}
      />
      
    </div>
  )
}

export default ProjectPage