
export interface images {
  [key: string]: string
}

const ProjectsImportService = {


  // get images with WebPack importAll(require.context(
  importAll: (r: __WebpackModuleApi.RequireContext) => {
    let images: images = {}
    r.keys().forEach((item, index) => {
      // console.log(item)
      images[item.replace('./', '')] = r(item)
    })
    return images
  }


}

export default ProjectsImportService