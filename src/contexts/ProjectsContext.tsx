import React, { createContext, useState } from 'react'

export interface Project {
  // these come through oc-api via cloudinary
  name: string
  url: string[] | undefined
  // these come straight from oc-api
  prettyName?: string | null
  beds?: string | null
  baths?: string | null
  sqft?: string | null
  address?: string | null
  architect?: string | null
  yearBuilt?: string | null
}

type ContextProps = {
  addProject: Function | null 
  projectsList: Project[] | null
}

export const ProjectsContext = createContext<Partial<ContextProps>>({})

type ProviderProps = {
  children: React.ReactNode
}

const ProjectsContextProvider = ( {children}: ProviderProps ) => {
  const [projectsList, setProjectsList] = useState<Project[] | null>([])

  const addProject = (project: Project) => {
    // console.log(project)
    if (projectsList) {
      setProjectsList(projectsList => [...projectsList, project])
    }
  }

  const value = {
    projectsList,
    addProject
  }

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsContextProvider