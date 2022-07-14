import React, { createContext, useState } from 'react'

export interface Project {
  name: string
  url?: string[] | undefined //img_urls TEXT[], --- DB names --
  description?: string | undefined // description  TEXT
  address?: string | undefined // address TEXT,
  architect?: string | undefined // architect TEXT
  prettyName?: string | undefined
  bedrooms?: string | undefined
  bathrooms?: string | undefined
  squareFootage?: string | undefined
  data1?: string | undefined
  data2?: string | undefined
  data3?: string | undefined
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
    // console.log('context addProject')
    if (projectsList) {
      setProjectsList(projectsList => [...projectsList, project])
    }
    // console.log(project)
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