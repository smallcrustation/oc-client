import config from '../config'

const TokenService = {
  saveAuthToken(token: string){
    window.sessionStorage.setItem(config.REACT_APP_TOKEN_KEY, token)
  },

  getAuthToken(){
    return window.sessionStorage.getItem(config.REACT_APP_TOKEN_KEY)
  },

  clearAuthToken(){
    window.sessionStorage.clear() //config.TOKEN_KEY??
  },

  hasAuthToken(){
    // console.log('hasAuthToken: ', !!this.getAuthToken())
    return !!this.getAuthToken()
  }
  
}

export default TokenService