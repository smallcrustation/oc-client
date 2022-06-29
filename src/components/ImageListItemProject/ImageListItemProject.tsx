import React from 'react'
// import { Link } from 'react-router-dom'
import ImgLoader from '../ImgLoader/ImgLoader'
import './ImageListItemProject.scss'

interface ImageListItemProjectProps {
  imageUrl: string
  keyProp: number
}

const ImageListItemProject: React.FC<ImageListItemProjectProps> = ({
  imageUrl,
  keyProp,
}) => {
  // const [loading, setloading] = useState(true)

  const renderListItem = () => {
    if (keyProp !== 0) {
      return (
        <li>
          <img src={imageUrl} alt="A Beautiful House" />
        </li>
      )
    } else {

      // ============IF LOG'D IN THIS WILL SHOW TEXT BOXES WITH DATA TEXT & SUBMIT BUTTON TO SEND THE DATA TO THE API IF CHANGED================
      return (
        <div className="DataListItem">
          <li>
            <img src={imageUrl} alt="A Beautiful House" />
          </li>
          <section>
            <h1>NAME</h1>
            <div className="Data">
              <p>DATA 1</p>
              <p>DATA 2</p>
              <p>DATA 3</p>
              <p>DATA 4</p>
            </div>

          </section>
        </div>
      )
    }
  }

  return (
    <div className="img-container">
      {!imageUrl ? <ImgLoader /> : <div>{renderListItem()}</div>}
    </div>
  )
}

export default ImageListItemProject
