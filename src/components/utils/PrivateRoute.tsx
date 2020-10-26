import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'

export interface IPrivateRouteProps extends RouteProps {
  isAuthenticated: boolean // is authenticate route
  redirectPath: string // redirect path if not authenticated
}

const PrivateRoute: React.FC<IPrivateRouteProps> = (props) => {
  return props.isAuthenticated ? (
    <Route {...props} component={props.component} render={undefined} />
  ) : (
    <Redirect to={{ pathname: props.redirectPath }} />
  )
}

export default PrivateRoute
