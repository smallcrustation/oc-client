import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

type SignInCred = {
  username: string
  password: string
}

const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm<SignInCred>()

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (signInCred: SignInCred) => {
    console.log(signInCred)
    setLoading(true)

    const loginCredentials = {
      username: signInCred.username,
      password: signInCred.password
    }

    try{
      // get resp from login api. if success set val's to ''. save auth token to window. run on successful login
      const user = await AuthApiService.login(loginCredentials)
      // console.log('HERE')
      // console.log(user.authToken)
      TokenService.saveAuthToken(user.authToken)
  //     this.context.setUser('logged in')
      // console.log('LOGIN SUCCESS')
      setLoading(false)
  //     this.props.onSuccessfulLogin()
  //   } catch (err) {
  //     this.setState({ error: err.error, loading: false })
  //     // console.log('LOGIN ERROR')
  //   }
    } catch (e){
      setLoading(false)
      console.error(e)
    }
  }

  // const handleSubmit = async (e: SignInEvent) => {
  //   setLoading(true)
  //   e.preventDefault()
  //   // const { username, pass } = e.target as SignInEvent
  //   const username: any = e.target.username

  //   const loginCredentials = {
  //     username: username.value,
  //     password: pass.value
  //   }

  //   try {
  //     // get resp from login api. if success set val's to ''. save auth token to window. run on successful login
  //     const user = await AuthApiService.login(loginCredentials)
  //     // console.log(res.authToken)
  //     TokenService.saveAuthToken(user.authToken)
  //     this.context.setUser('logged in')
  //     // console.log('LOGIN SUCCESS')
  //     this.setState({ loading: false })
  //     this.props.onSuccessfulLogin()
  //   } catch (err) {
  //     this.setState({ error: err.error, loading: false })
  //     // console.log('LOGIN ERROR')
  //   }
  // }

  return (
    <div className="SignInForm">
      <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
        <div role="alert">{error && <p className="error">{error}</p>}</div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              ref={register({ required: true, minLength: 4 })}
              // required
            />
            {errors.username && errors.username.type === 'required' && (
              <div className="error">Your must enter your username.</div>
            )}
              {errors.username && errors.username.type === 'minLength' && (
              <div className="error">Username must be more than 4 characters.</div>
            )}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              // required
              ref={register({ required: true, minLength: 4})}
            />
            {errors.password && errors.password.type === 'required' && (
              <div className="error">Your must enter your password.</div>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <div className="error">Password must be more than 4 characters.</div>
            )}

            <input type="submit" value="Login" />
          </div>
        )}
      </form>
    </div>
  )
}

export default SignInForm
