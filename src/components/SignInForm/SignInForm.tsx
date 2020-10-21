import React, { useState } from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../contexts/UserContext'

type SignInCred = {
  username: string
  password: string
}

type SignInFormProps = {
  onSuccessfulSignIn: Function
}

const SignInForm = ({onSuccessfulSignIn}: SignInFormProps) => {
  const userContext = useContext(UserContext)

  const { register, handleSubmit, errors } = useForm<SignInCred>()

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (signInCred: SignInCred) => {
    setLoading(true)

    if (userContext.signIn) {
      try {
        await userContext.signIn(signInCred)
        setLoading(false)
        await onSuccessfulSignIn()
      } catch (e) {
        setLoading(false)
        // console.error(e)
        setError(e.error)
      }
    } else {
      setLoading(false)
      console.error('CONTEXT ERROR userContext.signIn MISSING')
    }
  }

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
              <div className="error">
                Username must be more than 4 characters.
              </div>
            )}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              // required
              ref={register({ required: true, minLength: 4 })}
            />
            {errors.password && errors.password.type === 'required' && (
              <div className="error">Your must enter your password.</div>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <div className="error">
                Password must be more than 4 characters.
              </div>
            )}

            <input type="submit" value="Login" />
          </div>
        )}
      </form>
    </div>
  )
}

export default SignInForm
