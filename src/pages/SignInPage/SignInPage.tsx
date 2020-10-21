import React, { useState } from 'react'
import SignInForm from '../../components/SignInForm/SignInForm'
import {withRouter, RouteComponentProps} from 'react-router-dom'
// import ImgLoader from '../../components/ImgLoader/ImgLoader'

import './SignInPage.scss'

// rafce
const SignInPage: React.FunctionComponent<RouteComponentProps> = ({history}) => {
  // const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)
  const onSuccessfulSignIn = () => {
    history.push('/')
  }

  return (
    <div className="SignInPage">
      <SignInForm 
        onSuccessfulSignIn={onSuccessfulSignIn}
        />
    </div>
  )
}

export default SignInPage
