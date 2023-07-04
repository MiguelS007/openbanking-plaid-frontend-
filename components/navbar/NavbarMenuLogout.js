import { useContext } from 'react'

import { useRouter } from 'next/router'

import apiRequest from '../../libs/requests/apiRequest'

import AuthContext from '../../context/AuthContext'


const NavbarMenuLogout = () => {
    const router = useRouter()
    const authContext = useContext(AuthContext)
    const { checkAuth } = authContext

    const clickLogout = async (e) => {
        await apiRequest('/api/logout')
        await checkAuth()
        router.push('/')
    }

    return (
        <a className="navbar-item" onClick={(e) => clickLogout(e)}>
            Logout
        </a>
    )
}


export default NavbarMenuLogout