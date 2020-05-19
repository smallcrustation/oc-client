import React, { createContext, useState } from 'react'

interface Project {
  name: string
  url: string[] | undefined
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