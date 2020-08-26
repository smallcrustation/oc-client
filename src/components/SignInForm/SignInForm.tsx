import React, { useState } from 'react'

interface SignInEvent extends XMLHttpRequestEventTarget{
  username: string
  pass: string
}

const SignInForm = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    setLoading(true)
    e.preventDefault()
    // const { username, pass } = e.target as SignInEvent
    const username = 

    const loginCredentials = {
      username: username.value,
      password: pass.value
    }

    try {
      // get resp from login api. if success set val's to ''. save auth token to window. run on successful login
      const user = await AuthApiService.login(loginCredentials)
      // console.log(res.authToken)
      TokenService.saveAuthToken(user.authToken)
      this.context.setUser('logged in')
      // console.log('LOGIN SUCCESS')
      this.setState({ loading: false })
      this.props.onSuccessfulLogin()
    } catch (err) {
      this.setState({ error: err.error, loading: false })
      // console.log('LOGIN ERROR')
    }
  }

  return(
  <div className="SignInForm">
 <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="error">{error}</p>}</div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" name="pass" required />

            <input type="submit" value="Login" />
          </div>
        )}
      </form>

  </div>)
}

export default SignInForm
