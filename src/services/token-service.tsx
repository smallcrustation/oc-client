import config from '../config'

const TokenService = {
  saveAuthToken(token: any){ // change any make type
    window.sessionStorage.setItem(config.REACT_APP_TOKEN_KEY, token)
  },

  getAuthToken(){
    return window.sessionStorage.getItem(config.REACT_APP_TOKEN_KEY)
  },

  clearAuthToken(){
    window.sessionStorage.clear()
  },

  hasAuthToken(){
    // console.log('hasAuthToken: ', !!this.getAuthToken())
    return !!this.getAuthToken()
  }
  
}

export default TokenService