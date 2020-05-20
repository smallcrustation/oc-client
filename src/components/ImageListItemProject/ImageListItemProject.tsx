import React from 'react'
// import { Link } from 'react-router-dom'
import ImgLoader from '../ImgLoader/ImgLoader'


interface ImageListItemProjectProps {
  imageUrl: string
}

const ImageListItemProject: React.FC<ImageListItemProjectProps> = ({
  imageUrl,
}) => {
  // const [loading, setloading] = useState(true)

  // useEffect(
  //   () => {},

  //   //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   []
  // )

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
