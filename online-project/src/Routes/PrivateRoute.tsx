import React, { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { type RootState } from '../Redux/store'
import Cookies from 'js-cookie'

const PrivateRoute = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const { isAuth } = useSelector((state: RootState) => state.authReducer)

  const token = Cookies.get('token')
  if (isAuth && token !== null && token !== undefined) {
    return <>{children}</>
  } else {
    return <Navigate to="/" />
  }
}

export default PrivateRoute
