// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import './ResidentialPage.scss'

import ImageList from '../../components/ImageList/ImageList'

const ResidentialPage = () => {

  return (
    <div className="ResidentialPage">
      <section>
        <ImageList page="portfolio"/>
      </section>
    </div>
  )
}

export default ResidentialPage
