import React, { createContext, useState } from 'react'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'

interface User {
  // authenticated: boolean
  username: string | null
}

type ContextProps = {
  signIn: Function | null
  signOut: Function | null 
  username: string | null
}

type SignInCred = {
  username: string
  password: string
}

export const UserContext = createContext<Partial<ContextProps>>({})

type ProviderProps = {
  children : React.ReactNode
}

const UserContextProvider = ({children}: ProviderProps) => {
  const [user, setUser] = useState<User | null>({username: null})

  const signIn = async (signInCred: SignInCred) => {
    console.log(signInCred)

    const loginCredentials = {
      username: signInCred.username,
      password: signInCred.password
    }

    try{
      // get resp from login api. if success set val's to ''. save auth token to window. run on successful login
      const user = await AuthApiService.login(loginCredentials)
    // for now just for page update (logout btn)
      TokenService.saveAuthToken(user.authToken)
      console.log('LOGIN SUCCESS')
      setUser({username: loginCredentials.username}) 

    } catch (e){
      console.error(e)
      throw e
    }
  }

  const signOut = () => {
    TokenService.clearAuthToken()
    // for now just for page update (logout btn)
    setUser({username: null}) 
    console.log('Logd Out')
  }

  const value = {
    user,
    signIn,
    signOut
  }

  return(
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
  
}

export default UserContextProvider