import config from '../config'
import {Project} from '../contexts/ProjectsContext'


const imageApiService = {
  // set update db side img urls
  async updateProjectsDbUrls() {
    try {
      // console.log(' FETCHING .... getProjectImageUrls()')

      const imageUrls = await fetch(
        `${config.REACT_APP_API_ENDPOINT}/images/set-project-urls`
      )

      // console.log(imageUrls.json())

      return imageUrls
    } catch (e) {
      return e
    }
  },

  async getProjects() {
    try {
      // console.log(' FETCHING .... getProjects()')

      console.log(config.REACT_APP_API_ENDPOINT)
      const projects = await fetch(
        `${config.REACT_APP_API_ENDPOINT}/images/projects`
      )

      // console.log(projects.json())

      return projects
    } catch (e) {
      return e
    }
  },

  async updateProjectInfo(updatedProjectData: Project){
    const res = await fetch(`${config.REACT_APP_API_ENDPOINT}/images/update-project-info/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProjectData)
    })
    if(!res.ok){
      return res.json().then(e => Promise.reject(e))
    }
    return res.json()
  },

  // Not used anywhere right now, updates the images urls
  // now that I have log In I CAN easily add button
  async updateImageUrls() {
    try {
      const res = await `${config.REACT_APP_API_ENDPOINT}/api/images/set-project-urls`
      return res
    } catch (e) {
      return e
    }
  },

  // #### --------------- MAKE OBSOLETE --------------- ####

  // get image urls for project
  // async getProjectImageUrls(project: string) {
  //   try {
  //     // console.log(' FETCHING .... getProjectImageUrls()')

  //     const imageUrls = await fetch(
  //       `${config.REACT_APP_API_ENDPOINT}/images/${project}`
  //     )

  //     // console.log(imageUrls.json())

  //     return imageUrls
  //   } catch (e) {
  //     return e
  //   }
  // }
}

export default imageApiService
