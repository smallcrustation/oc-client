import config from '../config'

const imageApiService = {

  // set update db side img urls
  async updateProjectsDbUrls(){
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

  async getProjects(){
    try {
      // console.log(' FETCHING .... getProjects()')

      const projects = await fetch(
        `${config.REACT_APP_API_ENDPOINT}/images/projects`
      )

      // console.log(projects.json())

      return projects
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
