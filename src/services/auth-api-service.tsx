import config from '../config'

interface Credentials{
  username: string
  password: string
}

interface NewUser{
  username: string
  password: string
}

const AuthApiService = {
  async login(credentials: Credentials) {
    const res = await fetch(`${config.REACT_APP_API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res.json()
  },

  async createAccount(newUser: NewUser){
    const res = await fetch(`${config.REACT_APP_API_ENDPOINT}/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    if(!res.ok){
      return res.json().then(e => Promise.reject(e))
    }
    return res.json()
  },

}

export default AuthApiService