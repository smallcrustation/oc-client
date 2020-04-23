import React from 'react'
import ImageListItem from '../ImageListItem/ImageListItem'

interface ImageListProps {
  projectNames: string[]
}

const ImageList: React.FC<ImageListProps> = ({ projectNames }) => {
  // MAP MAP MAP
  return (
    <div className="ImageList">
      <ul>
        {projectNames.map((project, index) => (
          <ImageListItem projectName={project} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default ImageList
