import React from 'react'
import { useHistory } from "react-router-dom";
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.scss'

const LoginPage = () => {
  let history = useHistory();

  const onSuccessfulLogin = () => {
    // this.setState({accountCreated: false})
    return history.push('/portfolio')
  }

  return (
    <div className="LoginPage">
      <LoginForm onSuccessfulLogin={onSuccessfulLogin}/>
    </div>
  )
}

export default LoginPage
