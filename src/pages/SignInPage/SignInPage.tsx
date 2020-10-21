import React, { useState } from 'react'
import SignInForm from '../../components/SignInForm/SignInForm'
// import ImgLoader from '../../components/ImgLoader/ImgLoader'

import './SignInPage.scss'

// rafce
const SignInPage = () => {
  // const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)
  // const onSuccessfulSignIn = () => {
  //   this.props.history.push('/')
  // }

  return (
    <div className="SignInPage">
      <SignInForm />
    </div>
  )
}

export default SignInPage
