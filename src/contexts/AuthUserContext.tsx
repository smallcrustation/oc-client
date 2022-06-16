import React, { createContext, useState } from 'react'
import TokenService from '../services/token-service'


interface ContextProps {
  auth: boolean
  authenticateUser: Function
  logOut: Function
}

export const AuthUserContext = createContext<ContextProps | null>(null)

type ProviderProps = {
  children: React.ReactNode
}

const AuthUserContextProvider = ( {children}: ProviderProps ) => {
  const [auth, setAuth] = useState(Boolean)

  const authenticateUser = () => {
    setAuth(TokenService.hasAuthToken())
    return auth
  }

  const logOut = () => {
    TokenService.clearAuthToken()
    authenticateUser()
  }

  const value = {
    auth,
    authenticateUser,
    logOut
  }

  return (
    <AuthUserContext.Provider value={value}>
      {children}
    </AuthUserContext.Provider>
  )
}

export default AuthUserContextProvider