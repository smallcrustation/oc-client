import React, { useState, useEffect } from 'react'
import Img from 'react-image'
import './LandingPage.scss'
import halsey106 from '../../assets/images/residential/104 Halsey/Pics/18.jpg'

interface images {
  [key: string]: string
}

const LandingPage = () => {
  const [images, setImages] = useState()

  // let images
  function importAll(r: __WebpackModuleApi.RequireContext) {
    let images: images = {}
    r.keys().map((item, index) => {
      // console.log(item)
      images[item.replace('./', '')] = r(item)
    })
    return images
  }

  useEffect(() => {
    setImages(
      importAll(
        require.context(
          '../../assets/images/residential/104 Halsey/Pics',
          false,
          /\.(png|jpe?g|svg)$/
        )
      )
    )
  }, [])

  // console.log(images?images['1.jpg']:'not loaded')
  return (
    <div className="LandingPage">
      <section>
        <div className="img-container">
          {/* <img src={images?images['18.jpg']:''} alt="halsey106" /> */}
          <Img 
            src={images?[images['18.jpg']]:''}
          />
        </div>
        {/* <div className="img-container">
          <img src={images?images['1.jpg']:''} alt="halsey106" />
        </div> */}

        <article>
          Oberholtzer, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </article>
      </section>
    </div>
  )
}

export default LandingPage
