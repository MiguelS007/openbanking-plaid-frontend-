import { useContext } from 'react'

import AuthContext from '../context/AuthContext'

import LoaderSite from './loader/LoaderSite'
import LoginPage from './login/LoginPage'


const RouteProtection = ({children}) => {
    const authContext = useContext(AuthContext)
    const { isAuthenticated, loadingAuthentication } = authContext

    if (loadingAuthentication) return <LoaderSite />
    if (isAuthenticated !== true) return <LoginPage />

    return children
}


export default RouteProtection