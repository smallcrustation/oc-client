// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react'
// import Img from 'react-image'
import './LandingPage.scss'
// import { Link } from 'react-router-dom'
// import ImgLoader from '../../components/ImgLoader/ImgLoader'
// import imageApiService from '../../services/image-api-service'

import ImageList from '../../components/ImageList/ImageList'

// interface Project {
//   name: string
//   url: string | null
// }

const LandingPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [projectNames, setProjectNames] = useState(['boldLad', 'halsey104', 'castilla', 'halsey106', 'highFlyer', 'nativeDancer8124', 'nativeDancer8362', 'southePointe'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projectNames, setProjectNames] = useState(['southePointe'])

  if (projectNames) {
    return (
      <div className="LandingPage">
        <section>
          <ImageList projectNames={projectNames}/>
        </section>
      </div>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default LandingPage
