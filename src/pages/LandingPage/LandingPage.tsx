// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import LandingOptions from '../../components/LandingOptions/LandingOptions'
import './LandingPage.scss'

// import ImageList from '../../components/ImageList/ImageList'

const LandingPage = () => {

  return (
    <div className="LandingPage">
      <section>
        {/* <ImageList page="portfolio"/> */}
        <LandingOptions></LandingOptions>
      </section>
    </div>
  )
}

export default LandingPage
