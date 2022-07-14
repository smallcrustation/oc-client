import React, { useContext, useState } from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import './LoginForm.scss'

// so the header LOGOUT button toggles on state change... Should put login in context so I can run it anywhere.
import {AuthUserContext} from '../../contexts/AuthUserContext'


interface LoginFormProps {
  onSuccessfulLogin: any //I should find the actual history.prop type
}


const LoginForm = (props: LoginFormProps) => {
  const authUserContext = useContext(AuthUserContext)

  const [error, setError] = useState(0)

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {

    e.preventDefault()
    // console.log("SUBMIT'D")

    // to satisfy TypeScript types and get data from form
    const target = e.target as typeof e.target & {
      username: { value: string }
      pass: { value: string }
    }

    // console.log(target.username.value)
    // console.log(target.pass.value)

    const loginCredentials = {
      username: target.username.value,
      password: target.pass.value,
    }

    try {
      // get resp from login api. if success set val's to ''. save auth token to window. run on successful login
      const user = await AuthApiService.login(loginCredentials)
      // console.log(res.authToken)
      TokenService.saveAuthToken(user.authToken)
      // this.context.setUser('logged in')
      authUserContext?.authenticateUser()
      // console.log('LOGIN SUCCESS')
      // this.setState({ error: null, loading: false })
      // this.props.onSuccessfulLogin()
    } catch (err) {
      // console.log(err)
      // setError(err.error)
    }
  }

  return (
    <div className="LoginForm">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            // maxLength="25"
            required
          />

          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            // maxLength="25"
            required
          />

          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
