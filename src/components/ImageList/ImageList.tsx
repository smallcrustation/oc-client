import React, { useContext } from 'react'
import ImageListItemLanding from '../ImageListItemLanding/ImageListItemLanding'
import ImageListItemProject from '../ImageListItemProject/ImageListItemProject'
import './ImageList.scss'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import ImgLoader from '../ImgLoader/ImgLoader'

interface Project {
  name: string
  url: string[] | undefined
}

interface ImageListProps {
  //   projectNamesList?: string[]
  project?: Project
  page: string
}

// Props determine what renders, for either LandingPage or ProjectPage.
const ImageList: React.FC<ImageListProps> = ({ page, project }) => {
  const projectsContext = useContext(ProjectsContext)

  const renderImageList = () => {
    if (projectsContext.projectsList) {
      if (projectsContext.projectsList.length>0) {
        // projectsContext.projectsList.map((project, index) => (
        //   console.log(project, index)
        // ))
        if (page === 'portfolio') {
          return (
            <ul> 
              {projectsContext.projectsList.map((project, index) =>
                project.url ? (
                  <ImageListItemLanding project={project} key={index} />
                ) : (
                  ''
                )
              )}
            </ul>
          )
        }
        if (page === 'project') {
          if (project && project.url) {
            return (
              <ul>
                {project.url.map((projectUrl, index) =>
                  projectUrl ? (
                    <ImageListItemProject imageUrl={projectUrl} key={index} keyProp={index}/>
                  ) : (
                    ''
                  )
                )}
              </ul>
            )
          }
        }

      // LOADING
      } else { 
        return <ImgLoader/>
      }
    }
  }

  return <div className="ImageList">{renderImageList()}</div>
}

export default ImageList
