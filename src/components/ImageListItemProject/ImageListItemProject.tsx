import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import ImgLoader from '../ImgLoader/ImgLoader'
import './ImageListItemProject.scss'
import { AuthUserContext } from '../../contexts/AuthUserContext'
// import { Project } from '../../contexts/ProjectsContext'
import imageApiService from '../../services/image-api-service'

interface UpdatedProjectData {
  name: string
  [key: string]: any
}

interface ImageListItemProjectProps {
  imageUrl: string
  keyProp: number
  project: any
}

const ImageListItemProject: React.FC<ImageListItemProjectProps> = ({
  imageUrl,
  keyProp,
  project,
}) => {
  // const [loading, setloading] = useState(true)
  const authUserContext = useContext(AuthUserContext)

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
      name: project.name,
      address: target.address?.value,
      architect: target.architect?.value,
      prettyName: target.prettyName?.value,
      bedrooms: target.bedrooms?.value,
      bathrooms: target.bathrooms?.value,
      squareFootage: target.squareFootage?.value,
      data1: target.data1?.value,
      data2: target.data2?.value,
      data3: target.data3?.value,
    }

    const updatedProjectData: UpdatedProjectData = {
      name: tempUpdatedProjectData.name,
      address: tempUpdatedProjectData.address
    }

    for (const [key, value] of Object.entries(tempUpdatedProjectData)) {
      if (value !== undefined || null || '') {
        updatedProjectData[key] = value
      } else {
        updatedProjectData[key] = ''
      }
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const updatedProject = await imageApiService.updateProjectInfo(
        updatedProjectData
      )

      // target.address.value = ''
      // target.architect.value = ''
      // target.prettyName.value = ''
      // target.bedrooms.value = ''
      // target.bathrooms.value = ''
      // target.squareFootage.value = ''
      // target.data1.value = ''
      // target.data2.value = ''
      // target.data3.value = ''

    } catch (err) {
      // console.log(err)
      // this.setState({ error: err.error, loading: false })
    }
  }

  // For jsx ternary's, if there is data display if not don't
  const isThereData = (data: any) => {
    if (!data){
      return false
    }
    else{
      return true
    }
  }

  // This should all be broken down and automated for added data
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
    // if (true) {
      return (
        <div className="DataListItem">
          <li>
            <img src={imageUrl} alt="A Beautiful House" />
          </li>
          <section>
            <form onSubmit={handleSubmit}>
              <h1>
                <label htmlFor="prettyName">prettyName</label>

                <input
                  defaultValue={project.pretty_name || ''}
                  type="text"
                  id="prettyName"
                  name="prettyName"
                  className="InputH1"
                  // maxLength="25"
                  // required
                />
              </h1>

              <div className="Data">
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    defaultValue={project.address || ''}
                    // maxLength="25"
                    // required
                  />
                </div>
                <div>
                  <label htmlFor="bedrooms">bedrooms</label>
                  <input
                    type="text"
                    id="bedrooms"
                    name="bedrooms"
                    defaultValue={project.bedrooms || ''}
                    // maxLength="25"
                    // required
                  />
                  <label htmlFor="bathrooms">bathrooms</label>
                  <input
                    type="text"
                    id="bathrooms"
                    name="bathrooms"
                    defaultValue={project.bathrooms || ''}
                    // maxLength="25"
                    // required
                  />
                </div>
                <div>
                  <label htmlFor="squareFootage">squareFootage</label>
                  <input
                    type="text"
                    id="squareFootage"
                    name="squareFootage"
                    defaultValue={project.squareFootage || ''}
                    // maxLength="25"
                    // required
                  />
                </div>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </section>
        </div>
      )
    } else {

      return (
        <div className="DataListItem">
          <h1>{project.pretty_name}</h1>
          <li>
            <img src={imageUrl} alt="A Beautiful House" />
          </li>
          <section>
            
            {/* <h1>{project.pretty_name}</h1> */}
            
            <div className="Data">
              {(isThereData(project.square_footage)) ? <div><h3>SqFt</h3><p>{project.square_footage}</p></div> : ''}
              {(isThereData(project.address)) ? <div><h3>Address</h3><p>{project.address}</p></div> : ''}
              {(isThereData(project.bedrooms)) ? <div><h3>Beds/Baths</h3><p>{project.bedrooms}/{project.bathrooms}</p></div> : ''}
              {(isThereData(project.data_1)) ? <p>{project.data_1}</p> : ''}
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
