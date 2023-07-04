import { useEffect, useState } from 'react'

import apiRequest from '../libs/requests/apiRequest'

import AuthContext from './AuthContext'


const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuthenticated: false, loadingAuthentication: true })  

    const checkAuth = async () => {
        try {
            const dataAuth = await apiRequest('/api/auth')
            if (dataAuth && dataAuth.status_code >= 200 && dataAuth.status_code < 300) {
                setAuth({ isAuthenticated: true, loadingAuthentication: false })
            } else {
                setAuth({ isAuthenticated: false, loadingAuthentication: false })
            }
        } catch (err) {
            setAuth({ isAuthenticated: false, loadingAuthentication: false })
            console.error(err)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <AuthContext.Provider value={ { checkAuth, ...auth } }>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider
