// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react'
import Img from 'react-image'
import './LandingPage.scss'
import ImgLoader from '../../components/ImgLoader/ImgLoader'

import halsey104 from '../../assets/images/residential/104 Halsey/Pics/18.jpg'
import SPointe from '../../assets/images/residential/100 S Point Townhomes 2-3/pics/1.jpg'
import halsey106 from '../../assets/images/residential/106 Halsey/pics/1.jpg'
import castilla from '../../assets/images/residential/2301 Castilla/pics/1.jpg'
// import highflyer from '../../assets/images/residential/5568 HighFlyer/pics/1.jpg'
// import boldLad from '../../assets/images/residential/7703 boldLad/pics/1.jpg'
// import ND8124 from '../../assets/images/residential/8124 nd/pics/1.jpg'
// import ND8362 from '../../assets/images/residential/8362 nd/pics/1.jpg'

interface images {
  [key: string]: string
}

const LandingPage = () => {
  // const [images, setImages] = useState<images>()

  // // get images with WebPack importAll(require.context(
  // function importAll(r: __WebpackModuleApi.RequireContext) {
  //   let images: images = {}
  //   r.keys().forEach((item, index) => {
  //     // console.log(item)
  //     images[item.replace('./', '')] = r(item)
  //   })
  //   return images
  // }

  // useEffect(() => {
  // // look in '../file', false for deep search, match regex
  //   setImages(
  //     importAll(
  //       require.context(
  //         '../../assets/images/residential/104 Halsey/Pics',
  //         false,
  //         /\.(png|jpe?g|svg)$/
  //       )
  //     )
  //   )
  // }, [])

  // console.log(images?images:'not loaded')
  return (
    <div className="LandingPage">
      <section>
        {/* <div className="img-container">
          <ImgLoader/>
        </div> */}
        <div className="img-container">
          {/* <img src={images?images['18.jpg']:''} alt="halsey106" /> */}
          <Img 
            src={halsey104?halsey104:''}
            loader={<ImgLoader/>}
            // unloader={undefined} fallback if img couldn't be loaded
          />
        </div>
        <div className="img-container">
          {/* <img src={images?images['18.jpg']:''} alt="halsey106" /> */}
          <Img 
            src={SPointe?SPointe:''}
            loader={<ImgLoader/>}
            // unloader={undefined} fallback if img couldn't be loaded
          />
        </div>
        <div className="img-container">
          {/* <img src={images?images['18.jpg']:''} alt="halsey106" /> */}
          <Img 
            src={halsey106?halsey106:''}
            loader={<ImgLoader/>}
            // unloader={undefined} fallback if img couldn't be loaded
          />
        </div>
        <div className="img-container">
          {/* <img src={images?images['18.jpg']:''} alt="halsey106" /> */}
          <Img 
            src={castilla?castilla:''}
            loader={<ImgLoader/>}
            // unloader={undefined} fallback if img couldn't be loaded
          />
        </div>
      
        
      </section>
    </div>
  )
}

export default LandingPage
