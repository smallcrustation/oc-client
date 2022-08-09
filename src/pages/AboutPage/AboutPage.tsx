import React from 'react'
import './AboutPage.scss'

const AboutPage = () => {

  return (
    <div className="AboutPage">
      <img
        className="olden-days-img"
        src="https://res.cloudinary.com/krillsimgcloud/image/upload/v1588609215/oc/other/FrankO_pyhcmb.jpg"
        alt="Olden Days"
      />
      <h1 className="underline-h2">About</h1>
      <p>
      Oberholtzer Construction was started more than 80 years ago in Ohio and has been building in South Florida since 2005. 
      We manage and develop spec/custom, residential and commercial properties. We offer start to finish development services ranging 
      from finding and closing on property to turnkey construction with care and speed.
      </p>
    </div>
  )
}

export default AboutPage
