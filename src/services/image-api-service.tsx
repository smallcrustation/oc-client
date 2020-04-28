import config from '../config'

const imageApiService = {
  // get image urls for project
  async getProjectImageUrls(project: string) {
    try {
      console.log(' FETCHING .... getProjectImageUrls()')

      const imageUrls = await fetch(
        `${config.REACT_APP_API_ENDPOINT}/images/${project}`
      )
      return imageUrls
    } catch (e) {
      return e
    }
  },
}

export default imageApiService
