import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import ImgLoader from '../ImgLoader/ImgLoader'
import './ImageListItemProject.scss'
import { AuthUserContext } from '../../contexts/AuthUserContext'
import { Project } from '../../contexts/ProjectsContext'
import imageApiService from '../../services/image-api-service'

// interface Project {
//   name: string
//   url: string[] | undefined
// }

interface ImageListItemProjectProps {
  imageUrl: string
  keyProp: number
  project: Project
}

const ImageListItemProject: React.FC<ImageListItemProjectProps> = ({
  imageUrl,
  keyProp,
  project,
}) => {
  // const [loading, setloading] = useState(true)
  const authUserContext = useContext(AuthUserContext)

  // console.log(authUserContext?.auth)
  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      address: { value: string | undefined }
      architect?: { value: string }
      prettyName: { value: string }
      bedrooms: { value: string }
      bathrooms: { value: string }
      squareFootage: { value: string }
      data1?: { value: string }
      data2?: { value: string }
      data3?: { value: string }
    }

    // NEED TO CHECK IF UPDATED PROJECT DATA IS OK TO PUSH TO SERVICE?
    const tempUpdatedProjectData = {
      address: target.address,
      architect: target.architect,
      prettyName: target.prettyName,
      bedrooms: target.bedrooms,
      bathrooms: target.bathrooms,
      squareFootage: target.squareFootage,
      data1: target.data1,
      data2: target.data2,
      data3: target.data3,
    }

    let updatedProjectData = {  }

    for (const [key, value] of Object.entries(tempUpdatedProjectData)) {
      if (value !== undefined){
        updatedProjectData 
      } 
      else {
        return
      }
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const updatedProject = await imageApiService.updateProjectInfo(
        updatedProjectData
      )
      // console.log(savedUser) = ''
      // target.address.value = ''
      // target.architect.value = ''
      // target.prettyName.value = ''
      // target.bedrooms.value = ''
      // target.bathrooms.value = ''
      // target.squareFootage.value = ''
      // target.data1.value = ''
      // target.data2.value = ''
      // target.data3.value = ''

      // reload page?
      // onSuccessfulCreateUser()
    } catch (err) {
      console.log(err)
      // this.setState({ error: err.error, loading: false })
    }
  }

  const renderListItem = () => {
    // Any ListItem that is not the first [0] returns this, first LI shows property data rest are just images
    if (keyProp !== 0) {
      return (
        <li>
          <img src={imageUrl} alt="A Beautiful House" />
        </li>
      )
    }

    // USER IS LOG'D IN (CAN EDIT & SUBMIT)
    if (authUserContext?.auth) {
      return (
        <div className="DataListItem">
          <li>
            <img src={imageUrl} alt="A Beautiful House" />
          </li>
          <section>
            <h1>NAME ==LOGD IN===</h1>
            <div className="Data">
              <p>DATA 1</p>
              <p>DATA 2</p>
              <p>DATA 3</p>
              <p>DATA 4</p>
            </div>
          </section>
        </div>
      )
    } else {
      return (
        <div className="DataListItem">
          <li>
            <img src={imageUrl} alt="A Beautiful House" />
          </li>
          <section>
            <h1>{project.name}</h1>
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
