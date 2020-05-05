import React from 'react'
import ImageListItemLanding from '../ImageListItemLanding/ImageListItemLanding'
import ImageListItemProject from '../ImageListItemProject/ImageListItemProject'

interface Project {
  name: string
  url: string[] | undefined
}

interface ImageListProps {
  projectNamesList?: string[]
  project?: Project
}

// Props determine what renders
const ImageList: React.FC<ImageListProps> = ({ projectNamesList, project }) => {

  const renderImageList = () => {

    // IF USING A LIST OF STRINGS TO GET PROJECTS (for all projects get one img)
    if (projectNamesList) {
      return (
        <ul>
          {projectNamesList.map((project, index) => (
            <ImageListItemLanding projectName={project} key={index} />
          ))}
        </ul>
      )
    }
    // IF USING A PROJECT "OBJECT" (for one project get all its imgs)
    if (project) {



      return (
        <ul>
          {/* {console.log(project.url)} */}
          {project.url
            ? project.url.map((imageUrl, index) => (
                <ImageListItemProject imageUrl={imageUrl} key={index} />
              ))
            : 'Error...'}
        </ul>
      )
    }
  }

  // console.log('RENDER ImageList')

  return (
    <div className="ImageList">
      {/* <ul>
        {projectNamesList.map((project, index) => (
          <ImageListItem projectName={project} key={index} />
        ))}
      </ul> */}
      {renderImageList()}
    </div>
  )
}

export default ImageList
