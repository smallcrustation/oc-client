import React, { useState } from 'react'

import './PortfolioPage.scss'
import ImageList from '../../components/ImageList/ImageList'

const PortfolioPage = () => {
  const [projectNames] = useState(['boldLad', 'halsey104', 'castilla', 'halsey106', 'highFlyer', 'nativeDancer8124', 'nativeDancer8362', 'southePointe'])

  return (
    <div className="PortfolioPage">
      <section>
        <ImageList projectNamesList={projectNames} />
      </section>
    </div>
  )
}

export default PortfolioPage
