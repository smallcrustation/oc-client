import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import './CreateUserForm.scss'

type Props = {
  onSuccessfulCreateUser: any
}

function CreateUserForm({onSuccessfulCreateUser}: Props) {

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      secret: {value: string} //This is just an ez way to only allow authorized ppl to make accounts, check the API env
      username: { value: string }
      pass1: { value: string }
      pass2: { value: string }

    }

    const newUserCredentials = {
      secret: target.secret.value,
      username: target.username.value,
      password: target.pass1.value,
    }

    if (target.pass1.value !== target.pass2.value) {
      // remove return when more validation added
      // return this.setState({ error: 'Passwords must match!' })
      console.log('passwords did not match')
      return
    }

    const newUser = {
      username: newUserCredentials.username,
      password: newUserCredentials.password
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const savedUser = await AuthApiService.createAccount(newUser)
      console.log(savedUser)
      target.secret.value = ''
      target.username.value = ''
      target.pass1.value = ''
      target.pass2.value = ''
      // this.setState({loading: false })
      onSuccessfulCreateUser()
    } catch (err) {
      console.log(err)
      // this.setState({ error: err.error, loading: false })
    }
  }

  return (
    <div className='CreateUserForm'>
      <h2>Create User</h2>
      <form className="CreateUserForm" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="secret">Secret</label>
          <input
            type="text"
            id="secret"
            name="secret"
            // maxLength="25"
            required
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            // maxLength="25"
            required
          />

          <label htmlFor="pass1">Password</label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            // maxLength="25"
            required
          />

          <label htmlFor="pass2">Password</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            // maxLength="25"
            required
          />

          <input type="submit" value="Create" />
        </div>
      </form>
      
      </div>
  )
}

export default CreateUserForm