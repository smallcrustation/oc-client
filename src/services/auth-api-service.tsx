import config from '../config'

type loginCredentials = {
  username: string,
  password: string
}

type NewUser = {
  username: string,
  password: string
}

const AuthApiService = {
  async login(loginCredentials: loginCredentials) {
    const res = await fetch(`${config.REACT_APP_API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginCredentials)
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