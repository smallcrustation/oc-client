import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProjectsContext, Project } from '../../contexts/ProjectsContext'
import './LandingOptions.scss'

interface LandingOptionsProps {}

const LandingOptions: React.FC<LandingOptionsProps> = ({}) => {
  const projectsContext = useContext(ProjectsContext)

  const homesPic = () => {
    if (projectsContext.projectsList) {
      if (projectsContext.projectsList.length > 0) {
        // get home project pic you want to show
        let project = projectsContext.projectsList.find(
          (project) => project.data3 !== 'commercial'
        )

        return (
          <Link to={{ pathname: `/homes`}}>
            <img src={project?.url?.[0]} alt="A Beautiful House" />
          </Link>
        )
      }
    }
  }

  const commercialPic = () => {
    if (projectsContext.projectsList) {
      if (projectsContext.projectsList.length > 0) {
        // get commercial pic you want to show
        let project = projectsContext.projectsList.find(
          (project) => project.data3 === "commercial"
        )

        return (
          <Link to={{ pathname: `/commercial`}}>
            <img src={project?.url?.[0]} alt="A Beauty" />
          </Link>
        )
      }
    }
  }

  return (
    <div className="LandingOptions">
      <div className="residential img-container">{homesPic()}</div>
      <div className="commercial img-container">{commercialPic()}</div>
    </div>
  )
}

LandingOptions.propTypes = {}

export default LandingOptions
